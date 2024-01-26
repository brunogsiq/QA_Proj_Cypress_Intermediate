const locators= {
    Home: {
        Slogan: 'div > h1'
    },
    Login:{
        user: '.form-group > input[name="user[login]"]',
        pass: '.form-group > input[name="user[password]"]',
        btnSignIn: 'div > input[value="Sign in"]',
    },
    Logout:{
        avatar: '.qa-user-avatar'
    },
    newProj:{
        readme: '.qa-initialize-with-readme-checkbox'
    }
}
export default locators;