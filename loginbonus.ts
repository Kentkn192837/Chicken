// 擬似的に用意したユーザー情報
let json: any = [
    {
        "name"     : "TestUser0",
        "password" : "p0",
        "year"     : "2020",
        "month"    : "4",
        "day"      : "28",
        "point"    : 10
    },
    
    {
        "name"     : "TestUser1",
        "password" : "p1",
        "year"     : "2020",
        "month"    : "4",
        "day"      : "22",
        "point"    : 0
    }
];

window.onload = ( ev ) => {
    const username: any = document.getElementById( "username" );
    const password: any = document.getElementById( "password" );
    document.getElementById( "send" ).addEventListener( "click", login, false );
    let currentUser: string = "";
    let err_msg: string = "";
    let login_msg: string = "";
    let j: number;

    function login(): void{
        for( let i: number = 0; i < json.length; i++ ){
            if( username.value === json[ i ].name ){
                currentUser = json[ i ].name;
                j = i;
                break;
            }
        }

        if( currentUser === "" ){
            err_msg = "そのユーザーは存在しません";
            alert( err_msg );
        }

        if( err_msg === "" ){
            if( password.value === json[ j ].password ){
                login_msg = "ログインに成功しました。";
                alert( login_msg );
                alert( `ようこそ${currentUser}さん` );

                const date: any = new Date();
                const lastLogin: any = Date.UTC( json[ j ].year, json[ j ].month, json[ j ].day );

                const currentYear = date.getFullYear();
                const currentMonth = 1 + date.getMonth();
                const currentDay = date.getDate();
                const currentTime = Date.UTC( currentYear, currentMonth, currentDay );

                alert( `今日の日付:${currentYear}年 ${currentMonth}月 ${currentDay}日\n最終利用日:${json[ j ].year}年 ${json[ j ].month}月 ${json[ j ].day}日` );
                if( currentTime - lastLogin >= 60 * 60 * 24 * 1000 ){
                    alert( "ログインボーナスが支給されます" );
                    json[ j ].point += 5;
                }

                alert( `現在:${json[ j ].point}ポイント` );
            } else {
                err_msg = "パスワードを間違えています";
                alert( err_msg );
            }
        }
    }
}