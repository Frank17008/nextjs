import Link from "next/link";
import { useState } from "react";
function PageB() {
    const [color, setColor] = useState("red");
    const changeColor = () => {
        setColor(color === "red" ? "blue" : "red");
    };
    return (
        <>
            <div>
                <h2>PageB页面</h2>
                <Link href='/'>
                    <a>返回首页</a>
                </Link>
                <button onClick={changeColor}>改变文字颜色</button>
            </div>
            {/* jsx 样式写法 */}
            <style jsx>
                {`
                    h2 {
                        color: ${color};
                    }
                `}
            </style>
        </>
    );
}
export default PageB;
