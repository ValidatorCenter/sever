package platform

import (
	"context"
	"errors"
	"fmt"
	"github.com/go-redis/redis"
	"time"

	"github.com/mailru/dbr"
	_ "github.com/mailru/go-clickhouse"

	"sever/defs"
)

var (
	ErrPanic = errors.New("cleverly done, but you are not supposed to be here")
)

type Options struct {
	Redis      RedisOptions
	Clickhouse ClickhouseOptions
}

type RedisOptions struct {
	DSN       string
	Configure func(*redis.Options)
}

type ClickhouseOptions struct {
	DSN       string
	Configure func(*dbr.Connection)
}

type Handler struct {
	re func(context.Context) *redis.Client
	db func(context.Context) *dbr.Session
}

func NewHandler(opts *Options) (*Handler, error) {
	redisOpts, err := redis.ParseURL(opts.Redis.DSN)
	if err != nil {
		return nil, fmt.Errorf("cannot parse redis dsn: %s", err)
	}

	if opts.Redis.Configure != nil {
		opts.Redis.Configure(redisOpts)
	}

	re := redis.NewClient(redisOpts)
	if _, err := re.Ping().Result(); err != nil {
		return nil, fmt.Errorf("cannot ping redis: %s", err)
	}

	db, err := dbr.Open("clickhouse", opts.Clickhouse.DSN, &dbr.NullEventReceiver{})
	if err != nil {
		return nil, fmt.Errorf("cannot open db: %s", err)
	}

	if opts.Clickhouse.Configure != nil {
		opts.Clickhouse.Configure(db)
	}

	return &Handler{
		re: func(ctx context.Context) *redis.Client {
			return re.WithContext(ctx)
		},
		db: func(ctx context.Context) *dbr.Session {
			return db.NewSessionContext(ctx, nil)
		},
	}, nil
}

func (*Handler) SessionCreate(context.Context, *defs.SeedPhrase) (*defs.SessionID, error) {
	panic("implement me")
}

func (*Handler) SessionCheck(context.Context, *defs.SessionID) (*defs.WalletReq, error) {
	panic("implement me")
}

func (*Handler) SessionDelete(context.Context, *defs.SessionID) (*defs.NilReq, error) {
	panic("implement me")
}

func (*Handler) NewMnemonic(context.Context, *defs.NilReq) (*defs.SeedPhrase, error) {
	panic("implement me")
}

func (*Handler) AutoTaskOut(context.Context, *defs.AtasksOutReq) (*defs.ReturnAPITask, error) {
	panic("implement me")
}

func (*Handler) AutoTaskIn(context.Context, *defs.ResQ) (*defs.NodeTodoQ, error) {
	panic("implement me")
}

func (h *Handler) BlockOne(ctx context.Context, req *defs.BlockInfoReq) (*defs.RetJSONBlock, error) {
	s := h.db(ctx)
	q := s.Select("*").From("blocks").Where("height_i32 = ?", req.Number)
	var block struct {
		ID    string `db:"hash"`
		Dummy string `db:"-"`
	}

	if err := q.LoadStruct(&block); err != nil {
		return nil, fmt.Errorf("unable to load block: %s", err)
	}

	return &defs.RetJSONBlock{
		Block: &defs.Block1{
			Hash: block.ID,
		},
	}, nil
}

func (*Handler) TransactionOne(context.Context, *defs.TrxInfoReq) (*defs.RetJSONTrx, error) {
	panic("implement me")
}

func (*Handler) NodeOne(context.Context, *defs.NodeInfoReq) (*defs.RetJSONNode, error) {
	panic("implement me")
}

func packTimestamp(t time.Time) *defs.Timestamp {
	return &defs.Timestamp{
		Seconds: int64(t.Second()),
		Nanos:   int32(t.Nanosecond()),
	}
}

func (h *Handler) BlocksList(ctx context.Context, req *defs.BlocksListReq) (*defs.BlocksListResp, error) {
	s := h.db(ctx)
	var pageSize uint64 = 50
	q := s.Select("*").From("blocks").
		Offset(uint64(req.Page) * pageSize).Limit(pageSize)
	var blocks []struct {
		Hash         string    `db:"hash"`
		Height       int32     `db:"height_i32"`
		Time         time.Time `db:"time"`
		NumTxs       int32     `db:"num_txs_i32"`
		TotalTxs     int32     `db:"total_txs_i32"`
		Transactions []string  `db:"transactions"`
		BlockReward  float32   `db:"block_reward_f32"`
		Size         int32     `db:"size_i32"`
		Proposer     string    `db:"proposer"`
		UpdatedDate  time.Time `db:"updated_date"`
	}

	_, err := q.LoadStructs(&blocks)
	if err != nil {
		return nil, fmt.Errorf("unable to load block: %s", err)
	}

	var retBlocks []*defs.Block1
	for _, v := range blocks {
		retBlocks = append(retBlocks, &defs.Block1{
			Hash:    v.Hash,
			HashMin: v.Hash,
			Height:  v.Height,
			Time:    packTimestamp(v.Time),
			// todo Age
			NumTxs:   v.NumTxs,
			TotalTxs: v.TotalTxs,
			// todo Transactions
			// todo Events
			// todo Validators
			Proposer: v.Proposer,
			// todo ProposerName
			// todo ProposerLogo
			BlockReward: v.BlockReward,
			Size:        v.Size,
			// todo TransactionsAmnt
			// todo EventsAmnt
			// todo PrecommitsAmnt
		})
	}

	return &defs.BlocksListResp{AllBlocks: retBlocks}, nil
}

func (*Handler) TransactionsList(context.Context, *defs.TrxsListReq) (*defs.TrxsListResp, error) {
	panic("implement me")
}

func (*Handler) NodesList(context.Context, *defs.NilReq) (*defs.NodesListResp, error) {
	panic("implement me")
}

func (*Handler) CoinsList(context.Context, *defs.NilReq) (*defs.CoinsListResp, error) {
	panic("implement me")
}

func (*Handler) CoinOne(context.Context, *defs.CoinReq) (*defs.CoinResp, error) {
	panic("implement me")
}

func (*Handler) TasksList(context.Context, *defs.WalletListReq) (*defs.TasksListResp, error) {
	panic("implement me")
}

func (*Handler) WalletCoins(context.Context, *defs.WalletReq) (*defs.WalletResp, error) {
	panic("implement me")
}

func (*Handler) SyncStatus(context.Context, *defs.NilReq) (*defs.SyncResp, error) {
	panic("implement me")
}

func (*Handler) CoinBase(context.Context, *defs.NilReq) (*defs.CoinBaseResp, error) {
	panic("implement me")
}

func (*Handler) WalletRewards(context.Context, *defs.WalletReq) (*defs.WalletRewardsResp, error) {
	panic("implement me")
}

func (*Handler) WalletDelegate(context.Context, *defs.WalletReq) (*defs.WalletDelegateResp, error) {
	panic("implement me")
}

func (*Handler) WalletTrxs(context.Context, *defs.WalletListReq) (*defs.TrxsListResp, error) {
	panic("implement me")
}

func (*Handler) WalletActSendCoin(context.Context, *defs.SendCoinReq) (*defs.ActionResp, error) {
	panic("implement me")
}

func (*Handler) WalletActDelegCoin(context.Context, *defs.DelegCoinReq) (*defs.ActionResp, error) {
	panic("implement me")
}

func (*Handler) WalletActDeclrNode(context.Context, *defs.DeclareNodeReq) (*defs.ActionResp, error) {
	panic("implement me")
}

func (*Handler) WalletActOnOffNode(context.Context, *defs.StartStopNodeReq) (*defs.ActionResp, error) {
	panic("implement me")
}

func (*Handler) WalletActCreateCoin(context.Context, *defs.CreateCoinReq) (*defs.ActionResp, error) {
	panic("implement me")
}

func (*Handler) WalletActCreateChec(context.Context, *defs.CreateCheckReq) (*defs.ActionResp, error) {
	panic("implement me")
}

func (*Handler) WalletActRedeemCheck(context.Context, *defs.RedeemCheckReq) (*defs.ActionResp, error) {
	panic("implement me")
}

func (*Handler) WalletActNodeInfo(context.Context, *defs.NewNodeInfoReq) (*defs.ActionResp, error) {
	panic("implement me")
}

func (*Handler) WalletActCoinInfo(context.Context, *defs.NewCoinInfoReq) (*defs.ActionResp, error) {
	panic("implement me")
}
