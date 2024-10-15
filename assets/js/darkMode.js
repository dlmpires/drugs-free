$(document).ready(function(){

    if (localStorage.getItem('theme') === 'light') {
        $('body').addClass('lightTheme')
        $('#themeIcon').toggleClass('fa-sun fa-moon') 
        $('#faderImage').attr('src','./assets/img/svg/fader-light-theme.svg')
    }

    $('#themeSwitcher').click(function(){
        $('body').toggleClass('lightTheme')
        $('#themeIcon').toggleClass('fa-sun fa-moon')

        if (localStorage.getItem('theme') === 'dark') {
            window.localStorage.setItem('theme', 'light')
            $('#faderImage').attr('src','./assets/img/svg/fader-light-theme.svg')
        }
        else {
            window.localStorage.setItem('theme', 'dark')
            $('#faderImage').attr('src','./assets/img/svg/fader-dark-theme.svg')
        }
    });
});
