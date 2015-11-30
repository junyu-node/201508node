/**
 * Created by Administrator on 2015/11/30.
 */



var fs=require('fs');

/*{
 ino: 7881299347968542,
 size: 6,
 blocks: undefined,
 atime: Mon Nov 30 2015 17:58:00 GMT+0800 (中国标准时间),
 mtime: Mon Nov 30 2015 17:58:00 GMT+0800 (中国标准时间),
 ctime: Mon Nov 30 2015 17:58:00 GMT+0800 (中国标准时间),
 birthtime: Mon Nov 30 2015 15:24:41 GMT+0800 (中国标准时间)

  }
 {
 ino: 26458647810871844,
 size: 0,
 atime: Mon Nov 30 2015 15:27:13 GMT+0800 (中国标准时间),
 mtime: Mon Nov 30 2015 15:27:13 GMT+0800 (中国标准时间),
 ctime: Mon Nov 30 2015 15:27:13 GMT+0800 (中国标准时间),
 birthtime: Mon Nov 30 2015 15:24:41 GMT+0800 (中国标准时间) }


  */

fs.watchFile('read.txt',{interval:1000},function(oldstate,newstate){
    console.log(oldstate);
    console.log(newstate);


});