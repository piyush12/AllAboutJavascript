class UserStore {
    constructor(){
     if(! UserStore.instance){
       this._data = [];
       UserStore.instance = this;
     }

     return UserStore.instance;
    }

   //rest is the same code as preceding example

  }

  const instance = new UserStore();
  Object.freeze(instance);


