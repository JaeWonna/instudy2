function HomeLayout() {
    return (
        <main>
            <h1>로그인 회원가입</h1>

            <hr class="col-3 col-md-2 mb-5"/>

            <div class="row g-5">
                <div class="col-md-8">
                    <h2>Pages</h2>
                    <ul class="icon-list">
                        <li><a href="each/signIn">로그인</a></li>
                        <li><a href="each/signUp">회원가입</a></li>
                    </ul>

                </div>
            </div>
        </main>
    )
}

export default HomeLayout;