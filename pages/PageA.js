import Link from "next/link";
import { withRouter } from "next/router";
import axios from "axios";

function PageA({ router, data }) {
    // 接收getInitialProps中请求 resolve出来的数据
    console.log(data);
    return (
        <div>
            Page{router.query.name}页面 <br />
            Pathname:{router.pathname}
            <Link href='/'>
                <a>返回首页</a>
            </Link>
            {data.length &&
                data.map((item, index) => <div key={index}>{item.name}</div>)}
        </div>
    );
}

//发送请求 获取数据
PageA.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios(
            "http://rap2.taobao.org:38080/app/mock/244357/get/getMenuList"
        ).then((res) => {
            console.log(res);
            resolve(res.data);
        });
    });
    return await promise;
};
export default withRouter(PageA);
