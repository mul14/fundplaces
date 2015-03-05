var elixir = require ("laravel-elixir");

process.env.DISABLE_NOTIFIER = true;

elixir(function(mix) {
    mix.sass("assets/sass/main.scss");

    mix.copy('bower_components/bootstrap-sass/assets/fonts/bootstrap', 'assets/fonts')
});
