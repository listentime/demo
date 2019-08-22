//追加元素，首先要获取的父级元素
let box = document.querySelector('#box');
//进行追加
for (let i = 1; i <=30; i++) {
    let dv = document.createElement('div');
    dv.className = 'item';
    dv.innerHTML = "<img src = './image/"+i+".jpg'>";
    box.appendChild(dv);   
}
let items = box.children;
let gap = 10;
window.onload = function(){
    waterFall();
    function waterFall(){
        //对追加进去的元素，
        let pageWidth = getClient().width;
        let itemWidth = items[0].offsetWidth;
        let column =parseInt(pageWidth / (itemWidth+gap));
        let arr = [];
        //进行瀑布流排列
        for (let i = 0; i < items.length; i++) {
            if(i<column){
                items[i].style.top = 0 +'px';
                items[i].style.left = i * (items[i].offsetWidth+gap) + 'px';
                arr.push(items[i].offsetHeight);
            }else{

                //找到上一行中最矮的那一列
                let minHeight = arr[0];
                let index = 0;
                for (let j = 0; j < arr.length; j++) {
                    if(arr[j]<minHeight){
                        minHeight = arr[j];
                        index = j;
                    }               
                }
                items[i].style.top = arr[index] + gap +'px';
                items[i].style.left = items[index].offsetLeft + 'px';
                arr[index] = arr[index] + items[i].offsetHeight + gap;
            }

            
        }    
    }
   

    window.onresize = function(){
        waterFall();
    }
    window.onscroll = function(){
        //合适我才去加载数据
        if(getScrollTop()+getClient().height >= items[items.length-1].offsetTop){
            let datas = [
                "./image/31.jpg",
                "./image/32.jpg",
                "./image/33.jpg",
                "./image/34.jpg",
                "./image/35.jpg",
                "./image/36.jpg"
            ];
            for (let i = 0; i <datas.length; i++) {
                let dv = document.createElement('div');
                dv.className = 'item';
                dv.innerHTML = "<img src = '"+datas[i]+"'>";
                box.appendChild(dv);   
            }
            waterFall();
        }
    }
}


function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}
// scrollTop兼容性处理
function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
}