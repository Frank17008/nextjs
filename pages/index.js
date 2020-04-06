import Link from "next/link";
import Router from "next/router";

const Home = () => {
    // 路由钩子事件
    // routeChangeStart
    // routeChangeComplete
    // routeChangeError
    // beforeHistoryChange
    // hashChangeStart
    // hashChangeComplete
    const ROUTE_HOOKS_EVENTS = [
        "routeChangeStart",
        "routeChangeComplete",
        "routeChangeError",
        "beforeHistoryChange",
        "hashChangeStart",
        "hashChangeComplete",
    ];
    function makeEvents(type) {
        return (...args) => {
            console.log(type, ...args);
        };
    }
    ROUTE_HOOKS_EVENTS.forEach((event) => {
        Router.events.on(event, makeEvents(event));
    });
    function goToPageA() {
        // 路由跳转传参
        // Router.push("/pagea?name=A");
        Router.push({
            pathname: "/pagea",
            query: {
                name: "A",
            },
        });
    }
    function goToPageB() {
        Router.push("/pageb");
    }
    return (
        <div>
            {/*标签式跳转 */}
            <div>首页</div>
            标签式跳转
            <hr />
            {/* <Link href='/pagea?name=A'>
                <a>跳转到A页面</a>
            </Link> */}
            <Link href={{ pathname: "/pagea", query: { name: "A" } }}>
                <a>跳转到A页面</a>
            </Link>
            <Link href='/pageb'>
                <a>跳转到B页面</a>
            </Link>
            <hr />
            编程式跳转
            {/*  编程式跳转 */}
            <div>
                <button onClick={goToPageA}>跳转到PageA页面</button>
                <button onClick={goToPageB}>跳转到PageB页面</button>
            </div>
        </div>
    );
};
export default Home;
