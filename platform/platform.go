package platform

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/mailru/dbr"
	_ "github.com/mailru/go-clickhouse"

	"sever/defs"
)

var (
	ErrPanic = errors.New("cleverly done, but you are not supposed to be here")
)

type Options struct {
	ClickhouseDSN      string
	ClickhousePoolOpts *PoolOptions
}

type PoolOptions struct {
	MaxOpenConns    int
	MaxIdleConns    int
	ConnMaxLifetime time.Duration
}

type Handler struct {
	db *dbr.Connection
}

func NewHandler(opts *Options) (*Handler, error) {
	db, err := dbr.Open("clickhouse", opts.ClickhouseDSN, &dbr.NullEventReceiver{})
	if err != nil {
		return nil, fmt.Errorf("cannot open db: %s", err)
	}

	if opts.ClickhousePoolOpts != nil {
		db.SetMaxOpenConns(opts.ClickhousePoolOpts.MaxOpenConns)
		db.SetMaxIdleConns(opts.ClickhousePoolOpts.MaxIdleConns)
		db.SetConnMaxLifetime(opts.ClickhousePoolOpts.ConnMaxLifetime)
	}

	return &Handler{db: db,}, nil
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
	s := h.db.NewSessionContext(ctx, nil)

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

func (*Handler) BlocksList(context.Context, *defs.BlocksListReq) (*defs.BlocksListResp, error) {
	panic("implement me")
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
