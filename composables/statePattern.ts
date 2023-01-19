
export const useSP =()=>{
  // 胃袋の状態IF
  interface StomachState {
      withPlay():void;
      eat():void;
  }

  // 空腹状態
  class HungerState implements StomachState {  
      withPlay = () => console.log("お腹がすいたからご飯をくれ！");
      eat = () => console.log("やった！ご飯だ！");
  }

  // 満腹状態
  class FullState implements StomachState {  
      withPlay = () => console.log("遊ぶ！");
      eat = () => console.log("もうお腹いっぱいだよ・・・");
  }

  class Dog {
      private _state: StomachState;

      constructor(state: StomachState) {
        this.setStatus(state);
      }

      public setStatus(state: StomachState) {
        this._state = state;
      }
      // withPlayとeatはそれぞれ_state側で定義されているため
      // その中身を意識せず実行するだけ
      withPlay = () => this._state.withPlay(); 
      eat = () => this._state.eat();
  }

  const hungerState = new HungerState()
  hungerState.withPlay()
  hungerState.eat()
  const fullState = new FullState()
  fullState.withPlay()
  fullState.eat()
}