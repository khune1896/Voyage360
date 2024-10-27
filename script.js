function updateClock() {
    const date = new Date();

    const gmtDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));

    const myanmarDate = new Date(gmtDate.getTime() + (6.5 * 3600000));
    document.getElementById('myanmarhours').textContent = String(myanmarDate.getHours()).padStart(2, '0');
    document.getElementById('myanmarminutes').textContent = String(myanmarDate.getMinutes()).padStart(2, '0');
    document.getElementById('myanmarseconds').textContent = String(myanmarDate.getSeconds()).padStart(2, '0');

    const italyDate = new Date(gmtDate.getTime() + (1 * 3600000));
    document.getElementById('italyhours').textContent = String(italyDate.getHours()).padStart(2, '0');
    document.getElementById('italyminutes').textContent = String(italyDate.getMinutes()).padStart(2, '0');
    document.getElementById('italyseconds').textContent = String(italyDate.getSeconds()).padStart(2, '0');

    const franceDate = new Date(gmtDate.getTime() + (1 * 3600000));
    document.getElementById('francehours').textContent = String(franceDate.getHours()).padStart(2, '0');
    document.getElementById('franceminutes').textContent = String(franceDate.getMinutes()).padStart(2, '0');
    document.getElementById('franceseconds').textContent = String(franceDate.getSeconds()).padStart(2, '0');

    const greeceDate = new Date(gmtDate.getTime() + (2 * 3600000));
    document.getElementById('greecehours').textContent = String(greeceDate.getHours()).padStart(2, '0');
    document.getElementById('greeceminutes').textContent = String(greeceDate.getMinutes()).padStart(2, '0');
    document.getElementById('greeceseconds').textContent = String(greeceDate.getSeconds()).padStart(2, '0');

    const switzerlandDate = new Date(gmtDate.getTime() + (1 * 3600000));
    document.getElementById('switzerlandhours').textContent = String(switzerlandDate.getHours()).padStart(2, '0');
    document.getElementById('switzerlandminutes').textContent = String(switzerlandDate.getMinutes()).padStart(2, '0');
    document.getElementById('switzerlandseconds').textContent = String(switzerlandDate.getSeconds()).padStart(2, '0');

    const canadaDate = new Date(gmtDate.getTime() + (-5 * 3600000));
    document.getElementById('canadahours').textContent = String(canadaDate.getHours()).padStart(2, '0');
    document.getElementById('canadaminutes').textContent = String(canadaDate.getMinutes()).padStart(2, '0');
    document.getElementById('canadaseconds').textContent = String(canadaDate.getSeconds()).padStart(2, '0');

    const costaricaDate = new Date(gmtDate.getTime() + (-6 * 3600000));
    document.getElementById('costaricahours').textContent = String(costaricaDate.getHours()).padStart(2, '0');
    document.getElementById('costaricaminutes').textContent = String(costaricaDate.getMinutes()).padStart(2, '0');
    document.getElementById('costaricaseconds').textContent = String(costaricaDate.getSeconds()).padStart(2, '0');

    const maldivesDate = new Date(gmtDate.getTime() + (5 * 3600000));
    document.getElementById('maldiveshours').textContent = String(maldivesDate.getHours()).padStart(2, '0');
    document.getElementById('maldivesminutes').textContent = String(maldivesDate.getMinutes()).padStart(2, '0');
    document.getElementById('maldivesseconds').textContent = String(maldivesDate.getSeconds()).padStart(2, '0');

    const mauritiusDate = new Date(gmtDate.getTime() + (4 * 3600000));
    document.getElementById('mauritiushours').textContent = String(mauritiusDate.getHours()).padStart(2, '0');
    document.getElementById('mauritiusminutes').textContent = String(mauritiusDate.getMinutes()).padStart(2, '0');
    document.getElementById('mauritiusseconds').textContent = String(mauritiusDate.getSeconds()).padStart(2, '0');

    const newzealandDate = new Date(gmtDate.getTime() + (13 * 3600000));
    document.getElementById('newzealandhours').textContent = String(newzealandDate.getHours()).padStart(2, '0');
    document.getElementById('newzealandminutes').textContent = String(newzealandDate.getMinutes()).padStart(2, '0');
    document.getElementById('newzealandseconds').textContent = String(newzealandDate.getSeconds()).padStart(2, '0');

    const tenerifeDate = new Date(gmtDate.getTime());
    document.getElementById('tenerifehours').textContent = String(tenerifeDate.getHours()).padStart(2, '0');
    document.getElementById('tenerifeminutes').textContent = String(tenerifeDate.getMinutes()).padStart(2, '0');
    document.getElementById('tenerifeseconds').textContent = String(tenerifeDate.getSeconds()).padStart(2, '0');

    const icelandDate = new Date(gmtDate.getTime());
    document.getElementById('icelandhours').textContent = String(icelandDate.getHours()).padStart(2, '0');
    document.getElementById('icelandminutes').textContent = String(icelandDate.getMinutes()).padStart(2, '0');
    document.getElementById('icelandseconds').textContent = String(icelandDate.getSeconds()).padStart(2, '0');

    const romeDate = new Date(gmtDate.getTime() + (1 * 3600000));
    document.getElementById('romehours').textContent = String(romeDate.getHours()).padStart(2, '0');
    document.getElementById('romeminutes').textContent = String(romeDate.getMinutes()).padStart(2, '0');
    document.getElementById('romeseconds').textContent = String(romeDate.getSeconds()).padStart(2, '0');

    const hawaiiDate = new Date(gmtDate.getTime() + (-10 * 3600000));
    document.getElementById('hawaiihours').textContent = String(hawaiiDate.getHours()).padStart(2, '0');
    document.getElementById('hawaiiminutes').textContent = String(hawaiiDate.getMinutes()).padStart(2, '0');
    document.getElementById('hawaiiseconds').textContent = String(hawaiiDate.getSeconds()).padStart(2, '0');

    const canada1Date = new Date(gmtDate.getTime() + (-5 * 3600000));
    document.getElementById('canada1hours').textContent = String(canada1Date.getHours()).padStart(2, '0');
    document.getElementById('canada1minutes').textContent = String(canada1Date.getMinutes()).padStart(2, '0');
    document.getElementById('canada1seconds').textContent = String(canada1Date.getSeconds()).padStart(2, '0');
}

updateClock();
setInterval(updateClock, 1000);