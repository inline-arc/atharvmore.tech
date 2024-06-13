import React from "react";

export default function Gridflow() {

    return (
        <>
        <div class="absolute h-full w-full overflow-hidden opacity-50 [perspective:250px]">
            <div class="absolute inset-0 [transform:rotateX(45deg)]">
                <div class="inset-0 h-screen animate-move bg-repeat [background-image:linear-gradient(to_right,rgba(0,0,0)_2px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0)_2px,transparent_0)] [background-size:60px_30px] [transform-origin:100%_0_0]">
                </div>
        </div>
        <div className="flex justify-between items-center">
        <img src="https://i.pinimg.com/564x/39/90/fe/3990fee0cb3d6cb1c484f85bd6c0489b.jpg" class="h-60 m-6 rotate-45 rounded-full" alt="background"/>
        <img src="https://i.pinimg.com/564x/33/04/bc/3304bc2e6afdb60a09a8483f79fe6f49.jpg" class="h-32 rounded-md rotate-12 relative top-80 left-44 "  alt="lol"/>
        <img src="https://i.pinimg.com/564x/fb/c7/3c/fbc73c326c6d44974528aa369881919e.jpg" class="h-60 m-16 rounded-"  alt="none"/>

        </div>
        </div>
        </>
);
}