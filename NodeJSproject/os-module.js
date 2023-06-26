const os=require('os');
// info about current user
const user=os.userInfo();
console.log(user)

const currentOS={
name:os.type(),
release:os.release(),
tottalMemo:os.totalmem(),
freeMemo:os.freemem()
}
console.log("currentOS:",currentOS)