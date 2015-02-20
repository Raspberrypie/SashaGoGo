function k(c){_=c.keyCode,32==_&&(p._c=[p.c,p.c=p._c][0]),87==_&&p.y>h&&((p._y
)-=n,p.y-=n),83==_&&p._y<460&&(p.y+=n,p._y+=n),68==_&&p.x<m&&(p.x+=n,p._x+=n
),65==_&&p.x>h&&(p.x-=n,p._x-=n)}function f(e,_,p,n){c.fillRect(e,_,p,n)
}function q(e){c.fillStyle=e}function a(c){return Math.round(c)}function z()
{c.beginPath()}function _(){q(w.m),f(0,0,6*h,6*h),q("blue"),(c.font="16px sans"
),c.fillText("Score:"+s,t,16),q(b.c1),f(0,h,h,o),q(b.c2),f(t,h,h,o),q(p.c),f
(p.x,p.y,p.v.h,p.v.w),q(p._c),f(p._x,p._y,p.r.h,p.r.w),z(),q(e.c),c.arc((e.x
),e.y,e.r.r,0,6),c.fill(),z(),q(e._c),c.arc(e._x,e._y,e.r.r,0,6),c.fill(),(e._x
)+=d,e.x-=d,d>20&&(d=20),(e.x==2*h||e.x==o)&&(e._c=[e.c,e.c=e._c][0]),e._x<25&&
(d>0&&u?(d+=a(s/20),u=!1):(d-=a(s/20),u=!1),d*=-1),e._x>=575&&(d>=0&&u?(d+=a(s/
20),u=!1):(d-=a(s/20),u=!1),d*=-1),p.x>=m&&b.c2==w.b&&p.c!=e.c?(s++,b.c2=w.m,(u
)=!0):p.x>=m&&b.c2==w.b&&p.c==e.c&&(s=0,d=d>0?2:-2),p.x<=h&&b.c1==w.b&&p.c!=(e
).c?(s++,b.c1=w.m,u=!0):p.x<=h&&b.c1==w.b&&p.c==e.c&&(s=0,d=d>0?2:-2),b.c2==w.m
&&b.c1==w.m&&(b.c1=b.c2=w.b),(e.x>6*h||e._x>6*h)&&(e.x=e._x=t,d*=-1),(e.x<0||(e
)._x<0)&&(e.x=e._x=h,d*=-1)}v=document,c=v.createElement("canvas"),(v
).addEventListener("keydown",k,!1),c.id="c",c.height=c.width=600,(v
).body.appendChild(c),c=c.getContext("2d"),d=-2,s=0,u=!0,h=100,g=550,n=10,(o
)=400,j=260,m=420,t=500,w={b:"black",r:"red",_b:"blue",m:"#CCFFCC"},b={c1:(w.b
),c2:w.b},p={v:{h:80,w:40},c:w.r,x:j,y:j,_x:j,_y:300,_c:w._b,r:{h:80,w:40}},e=
{v:{r:25,c:w.r},c:w.r,x:50,y:50,_x:g,_y:g,_c:w._b,r:{r:25}},setInterval(_,16);