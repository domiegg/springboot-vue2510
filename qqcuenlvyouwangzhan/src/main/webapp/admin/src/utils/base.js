const base = {
    get() {
        return {
            url : "http://localhost:8080/qqcuenlvyouwangzhan/",
            name: "qqcuenlvyouwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qqcuenlvyouwangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "QQ村旅游网站"
        } 
    }
}
export default base
