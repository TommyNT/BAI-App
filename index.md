<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{{ '/assets/css/style.css?v=' | append: site.github.build_revision | relative_url }}" media="screen" type="text/css">
    <link rel="stylesheet" href="{{ '/assets/css/print.css' | relative_url }}" media="print" type="text/css">

    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <title>{{ site.title | default: site.github.repository_name }} by Paweł Kalinowski &amp; Duong Nguyen Tuan</title>
  </head>

  <body> 
    <header>
      <div class="inner">
        <a href="https://tommynt.github.io/BAI-App/">
          <h1>Pocket Sampler</h1>
        </a>
        <h2>Projekt zaliczeniowy z przedmiotu Bogate Aplikacje Internetowe. Aplikacja dzięki której możemy zagrać tzw. live act z wcześniej już wgranych i przypisanych do danego guzika sampli muzycznych.</h2>
      </div>
    </header>

    <div id="content-wrapper">
      <div class="inner clearfix">
        <section id="main-content">
          <h3 id="dane-autorów">Dane autorów:</h3>
          <ul>
            <li>Paweł Kalinowski, pawlo1337@gmail.com</li>
            <li>Duong Nguyen Tuan, tommynt@outlook.com</li>
          </ul>
          <table>
            <thead>
              <tr>
                <th style="text-align: center">Android 4.4</th>
                <th style="text-align: center">Android 5.1</th>
                <th style="text-align: center">Android 6.0</th>
                <th style="text-align: center">iOS 9.3</th>
                <th style="text-align: center">iOS 10.0</th>
                <th style="text-align: center">Windows 10 Store</th>
                <th style="text-align: center">Travis CI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center"><a href="http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=android-4.4,PLUGIN=cordova-plugin-media/"><img src="http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=android-4.4,PLUGIN=cordova-plugin-media" alt="Build Status"></a></td>
                <td style="text-align: center"><a href="http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=android-5.1,PLUGIN=cordova-plugin-media/"><img src="http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=android-5.1,PLUGIN=cordova-plugin-media" alt="Build Status"></a></td>
                <td style="text-align: center"><a href="http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=android-6.0,PLUGIN=cordova-plugin-media/"><img src="http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=android-6.0,PLUGIN=cordova-plugin-media" alt="Build Status"></a></td>
                <td style="text-align: center"><a href="http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=ios-9.3,PLUGIN=cordova-plugin-media/"><img src="http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=ios-9.3,PLUGIN=cordova-plugin-media" alt="Build Status"></a></td>
                <td style="text-align: center"><a href="http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=ios-10.0,PLUGIN=cordova-plugin-media/"><img src="http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=ios-10.0,PLUGIN=cordova-plugin-media" alt="Build Status"></a></td>
                <td style="text-align: center"><a href="http://cordova-ci.cloudapp.net:8080/job/cordova-periodic-build/PLATFORM=windows-10-store,PLUGIN=cordova-plugin-media/"><img src="http://cordova-ci.cloudapp.net:8080/buildStatus/icon?job=cordova-periodic-build/PLATFORM=windows-10-store,PLUGIN=cordova-plugin-media" alt="Build Status"></a></td>
                <td style="text-align: center"><a href="https://travis-ci.org/apache/cordova-plugin-media"><img src="https://travis-ci.org/apache/cordova-plugin-media.svg?branch=master" alt="Build Status"></a></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
        <aside id="sidebar">
          <a href="https://github.com/TommyNT/BAI-App/zipball/master" class="button">
              <small>Download</small>
              .zip file
            </a>
            <a href="https://github.com/TommyNT/BAI-App/tarball/master" class="button">
              <small>Download</small>
              .tar.gz file
            </a>
          

          
            <p class="repo-owner"><a href="https://github.com/TommyNT/BAI-App">BAI-App</a> is maintained by <a href="https://github.com/pawlo1">Paweł Kalinowski</a> &amp; <a href="https://github.com/TommyNT">Duong Nguyen Tuan</a> </p>
          
        </aside>
      </div>
    </div>

    {% if site.google_analytics %}
      <script type="text/javascript">
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', '{{ site.google_analytics }}', 'auto');
        ga('send', 'pageview');
      </script>
    {% endif %}
  </body>
</html>