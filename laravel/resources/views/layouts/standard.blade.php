@include('layouts.partials.header')
    <body>
        <div id="app">
            @yield('content')
        </div>
        <script src="{{ asset('js/app.js') }}" async></script>
    </body>
</html>
