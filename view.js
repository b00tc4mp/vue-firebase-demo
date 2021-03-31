var SignIn = {
    template: '<section><button v-on:click="signIn">Sign in with Google</button></section>',
    methods: {
        signIn: function () {
            signIn(function (error) {
                if (error) return alert(error)

                router.push({ name: 'home' })
            })
        }
    }
}

var Home = {
    props: ['name', 'photo'],
    template: '<main><h2>Welcome, {{ name }}!</h2><img crossorigin="anonymous" v-bind:src="photo"></main>'
}

var routes = [
    { name: 'login', path: '/login', component: SignIn },
    {
        name: 'home', path: '/home', component: Home,
        props: function () {
            return retrieveUser()
        }
    }
]

var router = new VueRouter({
    routes
})

router.beforeEach(function (to, from, next) {
    if (to.name !== 'login' && !isSignedIn()) next({ name: 'login' })
    else if (to.name === 'login' && isSignedIn()) next({ name: 'home' })
    else next()
})

var App = {
    template: '<main><h1>Hello, Vue-Firebase!</h1><button v-if="isSignedIn()" v-on:click="signOut">Sign Out</button><router-view></router-view></main>',
    router,
    data: {
        user: null
    },
    methods: {
        isSignedIn: isSignedIn,
        signOut: function () {
            signOut(function () {
                router.push({ name: 'login' })
            })
        }
    }
}