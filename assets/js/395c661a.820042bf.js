"use strict";(self.webpackChunkurdf_documentation=self.webpackChunkurdf_documentation||[]).push([[6917],{9907:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=o(4848),i=o(8453);const r={sidebar_position:3},s="Deploy URDF",l={id:"Define-Robot/Deploy-URDF",title:"Deploy URDF",description:"In this section, we will learn how to deploy a URDF file from a ROS2 package.",source:"@site/docs/Define-Robot/Deploy-URDF.md",sourceDirName:"Define-Robot",slug:"/Define-Robot/Deploy-URDF",permalink:"/docs/Define-Robot/Deploy-URDF",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Links",permalink:"/docs/Define-Robot/links"},next:{title:"Joints",permalink:"/docs/Define-Robot/joints"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Steps",id:"steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-urdf",children:"Deploy URDF"}),"\n",(0,t.jsx)(n.p,{children:"In this section, we will learn how to deploy a URDF file from a ROS2 package."}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/V_C8Cmv4fgk?si=uifNVty0BCsR8OdQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The following steps will guide you through deploying a URDF file to a ROS2 package."}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ROS2 workspace if you haven't already. You can follow the steps in the ",(0,t.jsx)(n.a,{href:"https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Creating-A-Workspace/Creating-A-Workspace.html",children:"Create a ROS2 Workspace"})," tutorial."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the src folder of the workspace unzip the robot description package downloaded from the URDF creator."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Build the workspace using the following command:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"colcon build\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Run the launch file in the robot description package that will launch the robot in Rviz:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ros2 launch <robot_description_package> <launch_file>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);