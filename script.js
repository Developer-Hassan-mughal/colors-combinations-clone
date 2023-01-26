

window.addEventListener("DOMContentLoaded",function(){

    var curser = document.querySelector("#curser");
var main = document.querySelector("#main");

main.addEventListener("mousemove",function(elem){
    curser.style.left = elem.x+"px";
    curser.style.top = elem.y+"px";

});


    function timelineone (){
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#main-img",
                start: "top top",
                end:"+=" + (window.innerHeight*12),
                stagger: 1,
                pin:true,
                scrub:1,
                // markers: true
            }
        })
        
        tl.from("#img-top",{
            left:"85%",
            ease:Power1
        },"same1")
        
        tl.from("#fs>img",{
            left:"85%",
            ease:Power1
        },"same1")
        
        tl.to("#circle",{
            scale:0,
            ease:Power1
        },"same")
        
        tl.to("#mid-circle",{
            scale:.6,
            ease:Power1
        
        },"same")
        
        tl.to("#semi-circle-btm img",{
            rotate:-180,
            stagger:.04,
            ease:Power1
        
        },"same")
        
        
        
        
        tl.to("#left-foot img:nth-child(1)",{
            opacity: 0,
            ease:Power1,
            delay:.03,
            duration:.01
        
        },"same")
        tl.to("#left-foot img:nth-child(2)",{
            opacity: 1,
            ease:Power1,
            delay:.03,
            duration:.01
        
        },"same")
        
        tl.to("#right-foot img:nth-child(1)",{
            opacity: 0,
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        tl.to("#right-foot img:nth-child(2)",{
            opacity: 1,
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        tl.to("#nav>span",{
            color: "white",
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        tl.to("#nave-right p",{
            color: "white",
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        tl.to("#c1",{
            background: "white",
            opacity:.15,
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        tl.to("#c2",{
            background: "white",
            opacity:.30,
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        tl.to("#c3",{
            background: "white",
            opacity:.45,
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        tl.to("#c4",{
            background: "white",
            opacity:.60,
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        tl.to("#c5",{
            background: "white",
            opacity:.75,
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        tl.to("#c6",{
            background: "white",
            opacity:1,
            ease:Power1,
            delay:.1,
            duration:.01
        
        },"same")
        
        
        
        
        
        
        tl.to("#fs>img",{
            scale:0,
            delay:.05,
            // duration:.5,
            ease:Power1
            
        },"same")
        tl.to("#img-top",{
            opacity:0,
            delay:-.05,
            // ease:Power1
        },"same")
        tl.to("#gal",{
            bottom: "-100%",
            ease:Power1
        },"same")
        tl.from("#pink-circle",{
            top:"100%",
            scale:.5,
            // delay:-.2,
            ease:Power1
        },"same")
        
        tl.from("#gal2",{
            top:"150%",
            delay:.2,
            rotate:"45deg",
            ease:Power1
        },"same")
        tl.to("#mid-circle",{
            scale:0,
            delay:.5,
            ease:Power1
        },"same")
        tl.to("#pink-circle",{
            opacity:0,
            delay:.5,
            ease:Power1
        },"same")
        tl.from("#card",{
            top:"100%",
            delay:.8,
            ease:Power1
        },"same")
        tl.to("#card",{
            top:"-100%",
            delay:1.5,
            ease:Power1
        },"same")
        tl.to("#main-img>img",{
            scale: .8,
            // delay:.1,
            ease:"none.none"
        },"same")
        tl.to("#main-img>img",{
            scale: .7,
            delay:.5,
            ease:"none.none"
        
        },"same")
        tl.to("#main-img>img",{
            scale: .6,
            delay:.8,
            ease:"none.none"
        
        },"same")
        
        tl.to("#main-img",{
            top:"-100%",
            // delay:.5,
            // ease:Power1
            ease:"none.none"
        
        })
        
    };
    function timelinesec(){
        var tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: "#second",
                // delay:1,
                start: "top top",
                // end:"bottom -200%",
                end:"+=" + (window.innerHeight*26),
        
                stagger:1,
                pin:true,
                scrub:1,
                // markers: true
            }
        })
        tl2.to("#fs2",{
            opacity: 0,
            delay:10,
            duration:3
        
        })
        
        tl2.from("#pink-c, #purple-c",{
            scale:.7,
            top:"125%",
            ease:Power1,
            delay:.5,
            stagger:.1
        })
        tl2.to("#pink-c, #purple-c",{
            left:"50%",
            delay:.2,
            ease:Power1
        })
        tl2.to("#pink-c, #purple-c",{
            scale:.7,
            delay:.2,
            ease:Power1
        })
        
        
        
        
        
        
        
        
        
        
        
        tl2.to("#pink-c",{
            scale:6,
            duration:3,
            delay:.2,
            ease:Power1
        },"flag1")
        tl2.to("#num-scroll>h1",{
            top:"-125%",
            delay:1.4,
            ease:Power1
        },"flag1")
        
        
        
        
        
        
        
        tl2.to("#nav2>span",{
            color: "white",
            ease:Power1,
            delay:1.3,
            duration:.01
        
        },"flag1")
        tl2.to("#nave2-right p",{
            color: "white",
            ease:Power1,
            delay:1.3,
            duration:.01
        
        },"flag1")
        tl2.to("#c1-2",{
            background: "white",
            opacity:.15,
            ease:Power1,
            delay:1.3,
            duration:.01
        
        },"flag1")
        tl2.to("#c2-2",{
            background: "white",
            opacity:.30,
            ease:Power1,
            delay:1.3,
        
            duration:.01
        
        },"flag1")
        tl2.to("#c3-2",{
            background: "white",
            opacity:.45,
            ease:Power1,
            delay:1.3,
        
            duration:.01
        
        },"flag1")
        tl2.to("#c4-2",{
            background: "white",
            opacity:.60,
            ease:Power1,
            delay:1.3,
        
            duration:.01
        
        },"flag1")
        tl2.to("#c5-2",{
            background: "white",
            opacity:.75,
            ease:Power1,
            delay:1.3,
        
            duration:.01
        
        },"flag1")
        tl2.to("#c6-2",{
            background: "white",
            opacity:1,
            ease:Power1,
            delay:1.3,
        
            duration:.01
        
        },"flag1")
        
        
        
        
        
        
        
        
        
        
        
        tl2.from("#gr",{
            left:"210%",
            delay:.2,
            duration:5,
            ease:Power1
        },"tl2")
        
        tl2.to("#li-2",{
            left:"60px",
            duration:5,
            delay:-3.5,
            ease:Power1
        },"tl2")
        
        tl2.to("#li-3",{
            left:"60px",
            duration:5,
            delay:3,
            ease:Power1
        },"tl2")
        
        tl2.to("#pink-c",{
            background: "linear-gradient( to right,#d5a7b4,#a88cfc)",
            duration:5,
            ease:Power1
        },"tl2")
        tl2.to("#sh1-1",{
            opacity:"0",
            delay:1,
            ease:Power1
        },"tl2")
        tl2.to("#sh1-2",{
            opacity:"1",
            delay:1.5,
            ease:Power1
        },"tl2")
        tl2.to("#num-scroll>h1",{
            top:"-250%",
            delay:3.5,
            ease:Power1
        },"tl2")
        
        tl2.from(".coloum",{
            top: "100%",
            ease: Power1,
            stagger:.1
        })
        
        tl2.to(".in-clm",{
            right: "50%",
            ease: Power1,
            // stagger:.1
        })
        tl2.to(".in-clm2",{
            right: "20%",
            ease: Power1,
            // stagger:.1
        })
        tl2.to("#second",{
            top:"-100%",
            // delay:.5,
            // ease:Power1
            ease:"none.none"
        
        })
        
    };
    function timelinethree(){
        var tl3 = gsap.timeline({
            scrollTrigger:{
                trigger: "#third",
                // delay:1,
                start: "top top",
                // end:"bottom -200%",
                end:"+=" + (window.innerHeight*26.5),
        
                stagger:1,
                pin:true,
                scrub:1,
                // markers: true
            }
        })
        tl3.to("#fss3",{
            opacity: 0,
            delay:17,
            duration:1
        
        })
    };
    function timelinefour(){
        var tl4 = gsap.timeline({
            scrollTrigger:{
                trigger: "#fourth",
                // delay:1,
                start: "top top",
                // end:"bottom -200%",
                end:"+=" + (window.innerHeight*40),
        
                stagger:1,
                // pin:true,
                scrub:1,
                // markers: true
            }
        })
        
        
        tl4.to("#fourth img",{
            rotate: "720deg",
            delay:8,
            duration:4
        
        },"flgg1")
        tl4.to("#moving-row span",{
            left: "-250%",
            delay:8,
            duration:5
        
        },"flgg1")
        
        
        tl4.to("#hidder",{
            left: "200%",
            delay:-4.3,
            duration:1.3
        
        })
        
        
        tl4.from("#span1",{
            left: "-50%",
            delay:-4.3,
            // duration:1
        
        },"flgg2")
        
        tl4.from("#span2",{
            left: "100%",
            delay:-4.3,
            // duration:1
        
        },"flgg2")
        
        tl4.from("#span3",{
            left: "-50%",
            delay:-4.3,
            // duration:1
        
        },"flgg2")
        
        
        tl4.from("#crop-1 img",{
            top: "-40%",
            delay:-4,
            // duration:1
        
        },"flgg3")
        tl4.from("#crop-3 img",{
            top: "90%",
            delay:-3.8,
            // duration:1
        
        },"flgg3")
        
        tl4.to("#center-txt-row span",{
            left: "-50%",
            delay:-3.8,
            // duration:1
        
        },"flgg3")
        
        tl4.to("#last-circle",{
            scale: "10",
            delay:-3.6,
            // duration:1
        
        },"flgg3")
        
    };

    timelineone();
timelinesec();
timelinethree();
timelinefour();
})
























