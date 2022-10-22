"use strict";
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  
  async login() {
    const client = this.body;
    try {
      const { id, password } = await UserStorage.getUserInfo(client.id, client.password);
  
      if (id, password) {
        if(id === client.id && password === client.password) {
          return { success : true };
        }
        return { success : false, msg : "비밀번호가 틀렸습니다." };
      }
      return { success : false, msg : "존재하지 않는 아이디입니다." };
    } catch (err) {
      return { success : false, msg : err };
    }
  }

  async register() {
    const client = this.body;
    try {
      if(client.password === client.confirmPassword) {
        const response = await UserStorage.save(client);
        
        return response;
      }
      return { success : false, msg : "비밀번호를 확인해주세요."};
    } catch (err) {
      return { success : false, msg : err };
    }
  }

  async userDelete() {
    const client = this.body;
    try {
      const { id, password } = await UserStorage.getUserInfo(client.id, client.password);
      
      if (id, password) {
        if(id === client.id && password === client.password) {
          const response = await UserStorage.deleteUserInfo(client.id);
    
          return { success : true, msg : "탈퇴가 정상 처리되었습니다." };
        }
        return { success : false, msg : "비밀번호가 틀렸습니다." };
      }
      return { success : false, msg : "존재하지 않는 아이디입니다." };
    } catch (err) {
      return { success : false, msg : err };
    }
  }

  async userEdit() {
    const client = this.body;
    try {
      const { id, password } = await UserStorage.getUserInfo(client.id, client.oldPassword);
      
      if (id, password) {
        if(id === client.id && password === client.oldPassword) {

          if(client.newPassword === client.confirmPassword) {
            const response = await UserStorage.editUserInfo(client.newPassword, client.id);

            return { success : true, msg : "비밀번호가 변경되었습니다." };
          }
          return { success : false, msg : "비밀번호를 확인해주세요." };
        }
        return { success : false, msg : "비밀번호가 틀렸습니다." };
      }
      return { success : false, msg : "존재하지 않는 아이디입니다." };
    } catch (err) {
      return { success : false, msg : err };
    }
  }

  async userUpload() {
    const client = this.body;
    try {
      const response = await UserStorage.saveImgInfo(client);        
      return response;
    } catch (err) {
      return { success : false, msg : err };
    }
  }
}

module.exports = User;