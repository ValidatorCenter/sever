package platform

import (
	"context"
	"testing"

	"sever/defs"
)

func TestHandler_SessionCreate(t *testing.T) {
	defer func() {
		if r := recover(); r == nil {
			t.Errorf("The code did not panic")
		}
	}()

	p := NewHandler()
	_, _ = p.SessionCheck(context.Background(), &defs.SessionID{});
}
