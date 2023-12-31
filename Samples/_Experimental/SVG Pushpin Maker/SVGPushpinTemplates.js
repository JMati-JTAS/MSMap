var svgPushpinTemplates = [
    {
        desc: 'An empty template',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 30" xml:space="preserve">{symContainer}<text x="15" y="20" style="font-size:16px;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="0" y="0" width="30" height="30" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 30,
        roundClickableArea: false,
        anchor: {
            x: 15,
            y: 15
        }
    },
    {
        desc: 'Default V7 Pushpin',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 25 40" xml:space="preserve"><circle cx="12.5" cy="14.5" r="10" fill="{color}"/><image x="0" y="0" height="40" width="25" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAnCAYAAAGNntMoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAPBSURBVEhLtZY/SGRXFMaHpE0bSJVkt8oKAf+CKytispGIjY1NcGXF/QM2wlYLgyCC+bPYpUhSCgZiJhapxEAKC0HE3cUtBLETFrExG2zMkPHm+5059/nmvTG+bHY+OL57vvOd79775s4dSzmMjY297cP6uKur67Pz8/NPFYOMrXJ0dBQIS5qis7PzgQ9LJfXesEEI4baSTzCLxIVJQzI6OmpJJGOO8wsbZJDwh4eHQRM8VzxV8w65FSK6u7vvYMvTqUb09vY2dkRoji7C0zqwSsPI4+NjGyj/KG7fuESRgnH8EeL7sXcEUero6PgclYhnyncYR44VfYwKMDYywvn8Xnp6egLhaUHI/8f19XU3rYMc3iUXwB4w1sq/9/gujuFroXaxDB2uJ7HhKqBDz5J++y9N6C1ZWFiIS/smhupfExp/pfgyrUugaadWV1c5YS+dMpDDU3cqj6GhIVaRgNxL/461tTVr4OnU1dAhuVmr1QJPp1oAbgm91i8Ud51qDr2ZWxMTE+H09NT2AqrVaoCj5rI6RJTTX1zXJzk1NJawhN3d3aSozyJ31gAGdqlx6FSoOk/DjXQ4bbADurS0VPi9m/bg4KBwg2m3trYKN5h2enraGrSn24TWzSVNJPcHgca0el2PeQMiLz3yPNGgpbE0MDBAHi/UZ4qnMUTvUENj4oi+vj743H7gqHnaCC7dLC69iIE+mPc43mnAebk5ZmdnXRoCY6cvB5eb65tfdFlwwE5OTgJhh60IJicnA+Hp1dBGbxKethD6lRzQcfiJ78H4+Hgol8uBW3Fubs5yeOrovKUY1PRocHDQ7jSgI9Vwo2ZBHR16+uj3Uh78tg8PDwd+c4HTBhlxltPBubaxSwxn539ZPz65/xU0e3l+fj5nDmQ0Kfpus4g1lyYQF/DD1wgNbk1NTcEXPxYFgB+++DPJ79vb2y2ZBF/8+Qo939/fb8kk+OLPTp5w88ZJ9Liud30tHeI+zIb4D7Ih/n0iToIv/vbd5rzzv6+EVcVD1R+kQ9z9bJ6Ke9k4+ftVVTr7HjXcF9rWrxsbG9RsRxL/4lGJodLP2aePVwj6lAd88CPPQVt7NDIyEvb29tAmn5EM/iREvYqh/A/CJWZOH/34OH05tM12CX+oVFjs1UCHnj63KA41Pl5cXHSr5qCOzlteDzJY29zcdMtGwFN36eujra3tnf7+/nB2dubWF4Cn7tL/B52UkZmZGbeugxzeJW8GMvx2ZWXFJuBJ7qU3C13fleXlZa7xilMtwVvt7e3v+rggSqV/ABNOzES/IWvuAAAAAElFTkSuQmCC"/>{symContainer}<text x="12" y="18" style="font-size:12px;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="6" y="7" width="13" height="13" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 25,
        height: 40,
        roundClickableArea: false,
        anchor: {
            x: 12,
            y: 40
        }
    },
    {
        desc: 'Default V8 Pushpin',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 32 32" xml:space="preserve"><circle cx="16" cy="16" r="14" style="stroke:{color};stroke-width:3;fill:transparent" /><circle cx="16" cy="16" r="11" fill="{color}"/>{symContainer}<text x="16" y="20" style="font-size:14px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="8" y="8" width="16" height="16" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 32,
        height: 32,
        roundClickableArea: true,
        anchor: {
            x: 16,
            y: 16
        }
    },
    {
        desc: 'Circle with thin border',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 30" xml:space="preserve"><circle cx="15" cy="15" r="14" style="stroke:{secondaryColor};stroke-width:1;fill:{color}"/>{symContainer}<text x="15" y="20" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="6" y="6" width="18" height="18" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 30,
        roundClickableArea: true,
        anchor: {
            x: 15,
            y: 15
        }
    },
    {
        desc: 'Triangle 2 with thin border',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 34 34" xml:space="preserve"><g transform="translate(1 1)"><polygon points="16,0 32,32 0,32 16,0" style="stroke:{secondaryColor};stroke-width:1;fill:{color}"/>{symContainer}<text x="16" y="25" style="font-size:14px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></g></svg>',
        symContainer: '<image x="10" y="14" width="13" height="13" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 34,
        height: 34,
        roundClickableArea: false,
        anchor: {
            x: 17,
            y: 17
        }
    },
    {
        desc: 'Diamond with thin border',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 34 34" xml:space="preserve"><g transform="translate(1 1)"><polygon points="0,16 16,32 32,16 16,0" style="stroke:{secondaryColor};stroke-width:1;fill:{color}"/>{symContainer}<text x="16" y="21" style="font-size:14px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></g></svg>',
        symContainer: '<image x="8" y="8" width="16" height="16" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 34,
        height: 34,
        roundClickableArea: true,
        anchor: {
            x: 17,
            y: 17
        }
    },
    //{
    //    desc: 'Hexagon with thin border',
    //    svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 34 34" xml:space="preserve"><polygon points="9,0 22,0 32,16 22,32 9,32 0,16 9,0" style="stroke:{secondaryColor};stroke-width:1;fill:{color}"/>{symContainer}<text x="15" y="25" style="font-size:10px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
    //    symContainer: '<image x="5" y="5" width="20" height="20" xlink:href="data:image/svg+xml,{symbol}"/>',
    //    setColor: true,
    //    width: 34,
    //    height: 34,
    //    roundClickableArea: true,
    //    anchor: {
    //        x: 17,
    //        y: 17
    //    }
    //},
    {
        desc: 'Circle with thick border',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 30" xml:space="preserve"><circle cx="15" cy="15" r="13" style="stroke:{secondaryColor};stroke-width:2;fill:{color}"/>{symContainer}<text x="15" y="20" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="6" y="6" width="18" height="18" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 30,
        roundClickableArea: true,
        anchor: {
            x: 15,
            y: 15
        }
    },
    {
        desc: 'Triangle 3 with thick border',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 36 36" xml:space="preserve"><g transform="translate(2 2)"><polygon points="16,0 32,32 0,32 16,0" style="stroke:{secondaryColor};stroke-width:2;fill:{color}"/>{symContainer}<text x="16" y="25" style="font-size:14px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></g></svg>',
        symContainer: '<image x="10" y="14" width="13" height="13" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 36,
        height: 36,
        roundClickableArea: false,
        anchor: {
            x: 18,
            y: 18
        }
    },
    {
        desc: 'Diamond with thick border',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 36 36" xml:space="preserve"><g transform="translate(2 2)"><polygon points="0,16 16,32 32,16 16,0" style="stroke:{secondaryColor};stroke-width:2;fill:{color}"/>{symContainer}<text x="16" y="21" style="font-size:14px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></g></svg>',
        symContainer: '<image x="8" y="8" width="16" height="16" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 36,
        height: 36,
        roundClickableArea: true,
        anchor: {
            x: 18,
            y: 18
        }
    },
    //{
    //    desc: 'Hexagon with thick border',
    //    svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 36 34" xml:space="preserve"><polygon points="9,0 22,0 32,16 22,32 9,32 0,16 9,0" style="stroke:{secondaryColor};stroke-width:2;fill:{color}"/>{symContainer}<text x="15" y="25" style="font-size:10px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
    //    symContainer: '<image x="5" y="5" width="20" height="20" xlink:href="data:image/svg+xml,{symbol}"/>',
    //    width: 36,
    //    height: 34,
    //    roundClickableArea: true,
    //    anchor: {
    //        x: 18,
    //        y: 17
    //    }
    //},
    {
        desc: 'Circle with symbol in corner',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 36 34" xml:space="preserve"><circle cx="16" cy="16" r="14" style="stroke:{secondaryColor};stroke-width:1;fill:{color}"/>{symContainer}<text x="16" y="21" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="21" y="0" width="14" height="14" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 36,
        height: 34,
        roundClickableArea: true,
        anchor: {
            x: 18,
            y: 17
        }
    },
    {
        desc: 'Triangle with small symbol in corner',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 36 34" xml:space="preserve"><g transform="translate(1 1)"><polygon points="16,0 32,32 0,32 16,0" style="stroke:{secondaryColor};stroke-width:1;fill:{color}"/>{symContainer}<text x="16" y="25" style="font-size:14px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></g></svg>',
        symContainer: '<image x="21" y="0" width="14" height="14" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 36,
        height: 34,
        roundClickableArea: false,
        anchor: {
            x: 18,
            y: 17
        }
    },
    {
        desc: 'Diamond with small symbol in corner',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 36 34" xml:space="preserve"><g transform="translate(1 1)"><polygon points="0,16 16,32 32,16 16,0" style="stroke:{secondaryColor};stroke-width:1;fill:{color}"/>{symContainer}<text x="16" y="21" style="font-size:14px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></g></svg>',
        symContainer: '<image x="21" y="0" width="14" height="14" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 36,
        height: 34,
        roundClickableArea: true,
        anchor: {
            x: 18,
            y: 17
        }
    },
    //{
    //    desc: 'Hexagon with small symbol in corner',
    //    svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 36 34" xml:space="preserve"><polygon points="9,0 22,0 32,16 22,32 9,32 0,16 9,0" style="stroke:{secondaryColor};stroke-width:1;fill:{color}"/>{symContainer}<text x="15" y="25" style="font-size:10px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
    //    symContainer: '<image x="21" y="0" width="14" height="14" xlink:href="data:image/svg+xml,{symbol}"/>',
    //    width: 36,
    //    height: 34,
    //    roundClickableArea: true,
    //    anchor: {
    //        x: 18,
    //        y: 17
    //    }
    //},
    {
        desc: 'Map Marker 1',
        svg: '<svg version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 365 560" xml:space="preserve"><path fill="{color}" d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9 C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z"/>{symContainer}<text x="185" y="280" style="font-size:220px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="65" y="65" width="240" height="240" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 21,
        height: 32,
        roundClickableArea: false,
        anchor: {
            x: 10,
            y: 32
        }
    },
    {
        desc: 'Map Marker 1 with large circle',
        svg: '<svg version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 365 560" xml:space="preserve"><path fill="{color}" d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9 C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z"/><circle cx="183" cy="183" r="150" fill="{secondaryColor}"/>{symContainer}<text x="183" y="250" style="font-size:180px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="65" y="65" width="240" height="240" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 21,
        height: 32,
        roundClickableArea: false,
        anchor: {
            x: 10,
            y: 32
        }
    },
    {
        desc: 'Map Marker 2',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 32 52"><g transform="matrix(0.03057603,0,0,0.03070631,-6.3065742,-4.4882472)"><path stroke-miterlimit="10" d="M 730.94,1839.63 C 692.17401,1649.33 623.82397,1490.96 541.03699,1344.1899 479.63001,1235.3199 408.49301,1134.83 342.673,1029.25 320.70099,994.00702 301.73901,956.77399 280.62601,920.19702 238.41,847.06 204.18201,762.26202 206.357,652.26501 208.482,544.79199 239.565,458.58099 284.38699,388.09299 358.10599,272.15799 481.58801,177.104 647.271,152.12399 782.737,131.7 909.74597,166.20599 999.81403,218.87199 1073.41,261.91 1130.41,319.39899 1173.73,387.15201 c 45.22,70.716 76.36,154.25998 78.97,263.23196 1.34,55.83002 -7.8,107.53204 -20.68,150.41803 -13.03,43.409 -33.99,79.69501 -52.64,118.45398 -36.41,75.659 -82.05,144.98402 -127.86,214.34402 -136.43699,206.61 -264.49601,417.31 -320.58,706.03 z" style="clip-rule:evenodd;fill:{color};fill-rule:evenodd;stroke-width:37;stroke-miterlimit:10" /></g>{symContainer}<text x="16" y="20" style="font-family:arial;font-size:12px;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="6" y="6" width="20" height="20" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 19,
        height: 31,
        roundClickableArea: false,
        anchor: {
            x: 9,
            y: 31
        }
    },
    {
        desc: 'Map Marker 2 with large circle',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 32 52"><g transform="matrix(0.03057603,0,0,0.03070631,-6.3065742,-4.4882472)"><path stroke-miterlimit="10" d="M 730.94,1839.63 C 692.17401,1649.33 623.82397,1490.96 541.03699,1344.1899 479.63001,1235.3199 408.49301,1134.83 342.673,1029.25 320.70099,994.00702 301.73901,956.77399 280.62601,920.19702 238.41,847.06 204.18201,762.26202 206.357,652.26501 208.482,544.79199 239.565,458.58099 284.38699,388.09299 358.10599,272.15799 481.58801,177.104 647.271,152.12399 782.737,131.7 909.74597,166.20599 999.81403,218.87199 1073.41,261.91 1130.41,319.39899 1173.73,387.15201 c 45.22,70.716 76.36,154.25998 78.97,263.23196 1.34,55.83002 -7.8,107.53204 -20.68,150.41803 -13.03,43.409 -33.99,79.69501 -52.64,118.45398 -36.41,75.659 -82.05,144.98402 -127.86,214.34402 -136.43699,206.61 -264.49601,417.31 -320.58,706.03 z" style="clip-rule:evenodd;fill:{color};fill-rule:evenodd;stroke-width:37;stroke-miterlimit:10" /><circle cx="725.54596" cy="661.047" r="337.33295" style="clip-rule:evenodd;fill:{secondaryColor};fill-rule:evenodd" /></g>{symContainer}<text x="16" y="20" style="font-family:arial;font-size:12px;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="8" y="7" width="16" height="16" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 19,
        height: 31,
        roundClickableArea: false,
        anchor: {
            x: 9,
            y: 31
        }
    },
    {
        desc: 'Map Marker 3',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 145 255"><path d="m 143.4,126.08 c 0,9.2035 -5.6813,18.3498 -16.987,27.4398 -8.578,6.8737 -18.2927,12.3847 -29.3146,16.4751 l 18.2935,84.0807 -30.2802,-80.0474 c -10.0555,2.784 -19.5998,4.1475 -28.6328,4.1475 -26.0763,0 -39.0863,-8.8055 -39.0863,-26.4743 0,-12.7254 5.6813,-23.2923 17.1567,-31.5865 L 18.699,51.3731 C 12.507,48.7032 8.7574996,46.8848 7.5644996,46.0326 3.5874996,43.1353 1.5993,39.2723 1.5993,34.3868 c 0,-9.09 8.0103996,-17.2138 24.0875,-24.315597 13.9755,-6.0786 27.0989,-9.1464 39.3138,-9.1464 14.7707,0 22.0993,4.7721 22.0993,14.316397 0,2.784 -2.1586,7.7266 -6.4765,14.8277 l 27.156,68.06 c 8.9759,0.4543 16.8729,2.9538 23.6332,7.4991 7.9534,5.1694 11.9874,12.0438 11.9874,20.452 z M 104.9384,102.4461 76.8169,33.5346 60.8531,40.8633 82.9525,124.2616 c 3.9199,-1.2494 7.7835,-3.1241 11.6465,-5.6806 7.2152,-4.8862 10.8507,-9.6584 10.8507,-14.3165 0,-0.6817 -0.1704,-1.25 -0.5113,-1.8184 z" style="fill:#666666"/><path style="fill:{color}" d="m 143.4,126.08 c 0,9.2035 -5.6813,18.3498 -16.987,27.4398 -8.578,6.8737 -18.2927,12.3847 -29.3146,16.4751 l -8.444747,0.27268 -3.541953,3.76062 c -10.0555,2.784 -19.5998,4.1475 -28.6328,4.1475 -26.0763,0 -39.0863,-8.8055 -39.0863,-26.4743 0,-12.7254 5.6813,-23.2923 17.1567,-31.5865 L 18.699,51.3731 C 12.507,48.7032 8.7575,46.8848 7.5645,46.0326 3.5875,43.1353 1.5993,39.2723 1.5993,34.3868 c 0,-9.09 8.0104,-17.2138 24.0875,-24.3156 13.9755,-6.0786 27.0989,-9.1464 39.3138,-9.1464 14.7707,0 22.0993,4.7721 22.0993,14.3164 0,2.784 -2.1586,7.7266 -6.4765,14.8277 l 27.156,68.06 c 8.9759,0.4543 16.8729,2.9538 23.6332,7.4991 7.9534,5.1694 11.9874,12.0438 11.9874,20.452 z M 104.9384,102.4461 76.8169,33.5346 60.8531,40.8633 82.9525,124.2616 c 3.9199,-1.2494 7.7835,-3.1241 11.6465,-5.6806 7.2152,-4.8862 10.8507,-9.6584 10.8507,-14.3165 0,-0.6817 -0.1704,-1.25 -0.5113,-1.8184 z"/><path style="fill:{secondaryColor};stroke-width:1" d="M 82.889992,124.12118 C 80.296698,115.48412 60.8531,40.8633 60.8531,40.8633 c 0.19883,-0.19883 3.022803,-1.630338 8.184693,-3.903294 L 76.8169,33.5346 91.731712,68.303494 c 8.136354,18.967188 12.223638,30.727737 13.206688,34.142606 2.5554,4.26295 -1.29846,8.91529 -7.393325,13.8751 -4.998952,4.06799 -14.136565,9.52692 -14.655083,7.79998 z"/>{symContainer}<text x="60" y="120" style="font-family:arial;font-size:80px;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="20" y="7" width="50" height="50" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 18,
        height: 32,
        roundClickableArea: false,
        anchor: {
            x: 14,
            y: 31
        }
    },
    {
        desc: 'Star',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 51 48"><path style="fill:{color};stroke:{secondaryColor};stroke-width:1px;" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>{symContainer}<text x="25" y="30" style="font-size:12px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="16" y="16" width="19" height="19" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 34,
        height: 32,
        roundClickableArea: false,
        anchor: {
            x: 17,
            y: 16
        }
    },
    {
        desc: 'Square with thin border',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 30" xml:space="preserve"><rect x="1" y="1" width="28" height="28" style="fill:{color};stroke:{secondaryColor};stroke-width:1;"/>{symContainer}<text x="15" y="20" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="5" y="5" width="20" height="20" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 30,
        roundClickableArea: false,
        anchor: {
            x: 15,
            y: 15
        }
    },
    {
        desc: 'Square with thick border',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 30" xml:space="preserve"><rect x="2" y="2" width="26" height="26" style="fill:{color};stroke:{secondaryColor};stroke-width:2;"/>{symContainer}<text x="15" y="20" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="5" y="5" width="20" height="20" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 30,
        roundClickableArea: false,
        anchor: {
            x: 15,
            y: 15
        }
    },
    {
        desc: 'Rounded square 1',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 30" xml:space="preserve"><rect x="0" y="0" rx="8" ry="8" width="30" height="30" style="fill:{color}"/>{symContainer}<text x="15" y="20" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="4" y="4" width="22" height="22" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 30,
        roundClickableArea: false,
        anchor: {
            x: 15,
            y: 15
        }
    },
    {
        desc: 'Rounded square 1 with border',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 32 32" xml:space="preserve"><rect x="1" y="1" rx="8" ry="8" width="30" height="30" style="fill:{color};stroke-width:1;stroke:{secondaryColor};"/>{symContainer}<text x="15" y="20" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="4" y="4" width="24" height="24" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 32,
        height: 32,
        roundClickableArea: false,
        anchor: {
            x: 16,
            y: 16
        }
    },
    {
        desc: 'Rounded square marker',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 37" xml:space="preserve"><rect x="0" y="0" rx="8" ry="8" width="30" height="30" fill="{color}"/><polygon fill="{color}" points="10,29 20,29 15,37 10,29"/>{symContainer}<text x="15" y="20" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="4" y="4" width="22" height="22" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 37,
        roundClickableArea: false,
        anchor: {
            x: 15,
            y: 37
        }
    },
    {
        desc: 'Square marker',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 37" xml:space="preserve"><rect x="0" y="0" width="30" height="30" fill="{color}"/><polygon fill="{color}" points="10,29 20,29 15,37 10,29"/>{symContainer}<text x="15" y="20" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="4" y="4" width="22" height="22" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 37,
        roundClickableArea: false,
        anchor: {
            x: 15,
            y: 37
        }
    },
    {
        desc: 'Square marker 2',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 37" xml:space="preserve"><polygon style="fill:{color};stroke-width:1;stroke:{secondaryColor};" points="1,1 29,1 29,29 20,29 15,37 10,29 1,29 1,1"/>{symContainer}<text x="15" y="20" style="font-size:16px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="4" y="4" width="22" height="22" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 37,
        roundClickableArea: false,
        anchor: {
            x: 15,
            y: 37
        }
    },
    {
        desc: 'Rounded square marker 2',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 38 45" xml:space="preserve"><rect x="0" y="8" rx="8" ry="8" width="30" height="30" fill="{color}"/><circle cx="30" cy="8" r="8" fill="{color}"/><polygon fill="{color}" points="10,36 20,36 15,45 10,36"/>{symContainer}<text x="30" y="12" style="font-size:12px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="4" y="12" width="22" height="22" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 38,
        height: 45,
        roundClickableArea: false,
        anchor: {
            x: 15,
            y: 45
        }
    },
    {
        desc: 'Square marker 3',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 38 45" xml:space="preserve"><rect x="0" y="8" width="30" height="30" fill="{color}"/><circle cx="30" cy="8" r="8" fill="{color}"/><polygon fill="{color}" points="10,36 20,36 15,45 10,36"/>{symContainer}<text x="30" y="12" style="font-size:12px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="4" y="12" width="22" height="22" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 38,
        height: 45,
        roundClickableArea: false,
        anchor: {
            x: 15,
            y: 45
        }
    },
    {
        desc: 'V7 Directions waypoint marker',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 37 35" xml:space="preserve"><circle cx="32" cy="30" r="4" style="stroke-width:2;stroke:#ffffff;fill:#000000;"/><polygon style="fill:rgba(0,0,0,0.5)" points="18,1 32,30 18,18 18,1"/><rect x="2" y="2" width="15" height="15" style="stroke-width:2;stroke:{secondaryColor};fill:{color}"/>{symContainer}<text x="9" y="13" style="font-size:11px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="4" y="4" width="11" height="11" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 40,
        height: 38,
        roundClickableArea: false,
        anchor: {
            x: 32,
            y: 30
        }
    },
    {
        desc: 'Shield',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 600 600"><path d="m 300.49949,20.502829 c 22.75188,19.382947 57.35051,35.161018 89.58219,35.161018 32.23168,0 66.83132,-15.780901 89.58321,-35.163847 l 106.95428,105.9343 c -26.99537,22.48078 -46.70918,44.05337 -46.70918,82.26107 0,27.48235 9.26541,63.71285 20.35284,86.97012 9.57972,20.10708 15.13711,48.11906 15.13711,71.87606 0,85.32005 -58.96355,164.68258 -144.2836,164.68258 l -29.34668,0 c -40.88457,0 -77.37244,18.82288 -101.26994,48.27587 -23.89795,-29.45299 -60.38536,-48.27587 -101.26993,-48.27587 l -29.34715,0 c -85.319572,0 -144.2836,-79.36253 -144.2836,-164.68258 0,-23.757 5.557381,-51.76898 15.137594,-71.87606 11.086947,-23.25727 20.352353,-59.48777 20.352353,-86.97012 0,-38.2077 -19.713261,-55.8425 -46.708157,-82.26107 L 121.33511,20.5 c 22.75189,19.382946 57.35004,35.163847 89.58219,35.163847 32.23168,0 66.83031,-15.778071 89.58219,-35.161018 z" style="fill:{color};stroke:{secondaryColor};stroke-width:10;stroke-miterlimit:4;"/>{symContainer}<text x="300" y="400" style="font-size:250px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="120" y="120" width="360" height="360" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 32,
        height: 32,
        roundClickableArea: false,
        anchor: {
            x: 16,
            y: 16
        }
    },
    {
        desc: 'Shield 2',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 600 600"><g transform="matrix(0.998336,0,0,0.998338,0.499168,0.498686)" style="fill:#ffffff;stroke:#000000;stroke-width:1;stroke-miterlimit:4;"><path d="m 80.75293,0 c 34.67578,10.583496 71.48486,16.276856 109.62402,16.276856 38.13868,0 74.94727,-5.69336 109.62305,-16.2763677 34.67578,10.5830077 71.48438,16.2763677 109.62305,16.2763677 38.13867,0 74.94824,-5.69336 109.62402,-16.276856 C 569.8125,63.908203 600,144.67822 600,232.5 600,413.92383 471.16992,565.25391 300,599.99902 128.83008,565.25391 0,413.92383 0,232.5 0,144.67822 30.187988,63.907715 80.75293,0 z" style="fill:#ffffff;stroke:#000000;stroke-width:1;stroke-miterlimit:4;"/><path d="m 80.75293,0 c 34.67578,10.583496 71.48486,16.276856 109.62402,16.276856 38.13868,0 74.94727,-5.69336 109.62305,-16.2763677 34.67578,10.5830077 71.48438,16.2763677 109.62305,16.2763677 38.13867,0 74.94824,-5.69336 109.62402,-16.276856 C 569.8125,63.908203 600,144.67822 600,232.5 600,413.92383 471.16992,565.25391 300,599.99902 128.83008,565.25391 0,413.92383 0,232.5 0,144.67822 30.187988,63.907715 80.75293,0 z" style="fill:#ffffff;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;" /></g><g transform="matrix(1.00709,0,0,1.01028,-2.12803,-3.66885)"  style="fill:{color};"><path d="m 15,232.5 c 0,-31.979 4.169434,-62.98389 11.994629,-92.50098 l 546.011231,0 C 580.83008,169.51611 585,200.521 585,232.5 585,405.60547 462.82617,550.17188 300,584.67676 137.17432,550.17188 15,405.60547 15,232.5 z" style="fill:{color};"/></g><g transform="matrix(1.01255,0,0,1.02715,-3.7638,-3.10175)" style="fill:{secondaryColor};"><path d="M 31.324219,124.99902 C 43.579102,85.77832 62.362793,49.44043 86.402832,17.259766 c 33.101558,9.132812 67.967778,14.012695 103.974118,14.012695 38.06055,0 74.84766,-5.45166 109.62305,-15.617676 34.77539,10.166016 71.5625,15.617676 109.62305,15.617676 36.00586,0 70.87304,-4.879883 103.97461,-14.012695 24.03906,32.180664 42.82324,68.518554 55.07812,107.739254 l -537.351561,0 0,0 z" style="fill:{secondaryColor};"/></g>{symContainer}<text x="300" y="405" style="font-size:280px;font-family:arial;text-anchor:middle;fill:{textColor}">{text}</text></svg>',
        symContainer: '<image x="120" y="150" width="360" height="360" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 32,
        height: 32,
        roundClickableArea: false,
        anchor: {
            x: 16,
            y: 16
        }
    },
    {
        desc: 'Circle marker',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 30 32" xml:space="preserve"><circle cx="15" cy="15" r="12" style="fill:{secondaryColor};stroke:{color};stroke-width:3;"/><polygon fill="{color}" points="12,27 18,27 15,32 12,27"/>{symContainer}<text x="15" y="18" style="font-size:10px;font-family:arial;fill:{textColor};" text-anchor="middle">{text}</text></svg>',
        symContainer: '<image x="8" y="8" width="14" height="14" xlink:href="data:image/svg+xml,{symbol}"/>',
        width: 30,
        height: 32,
        roundClickableArea: true,
        anchor: {
            x: 15,
            y: 32
        }
    },
];
var svgSymbols = [
    {
        desc: 'Bike',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" height="19" width="31" viewBox="0 0 574 352" xml:space="preserve"><g transform="translate(-177.22315,-187.48777)"><circle transform="matrix(0.612193,0,0,0.612193,156.40859,178.29391)" r="161" cy="409" cx="215" style="fill:none;fill-opacity:1;stroke:{symbolColor};stroke-width:40px;stroke-opacity:1" /><circle transform="matrix(0.612193,0,0,0.612193,156.40859,178.29391)" r="161" cy="406" cx="790" style="fill:none;fill-opacity:1;stroke:{symbolColor};stroke-width:40px;stroke-opacity:1"/><path style="fill:{symbolColor};fill-opacity:1;fill-rule:evenodd;stroke:{symbolColor};stroke-width:0.61219299;stroke-opacity:1" d="m 419.33591,187.76277 c -81.15626,0.791 -67.39292,-8.38456 -111.05594,131.93826 -35.56995,112.11783 -31.69552,99.89097 -31.88155,107.75543 -0.13037,6.10982 4.80163,10.95404 10.99923,11.36869 12.88887,-1.30322 7.46752,1.39395 52.15306,-137.36977 163.27931,172.24394 102.021,144.31296 189.89195,147.81092 115.48553,-1.10739 124.87203,6.01158 126.24309,-10.91575 -0.1582,-5.74792 -2.84759,-9.17557 -82.10546,-185.56784 l 7.59356,-20.88232 26.1029,-0.4746 -0.9492,-21.83151 h -97.2926 c -8.5955,11.75949 3.48039,11.70675 46.98521,21.35692 l -7.59357,21.3569 -194.11061,0.47461 c 13.07781,-45.66688 5.69518,-42.8193 64.54534,-42.71383 z m -70.62884,88.427 189.94107,-0.33678 -54.89431,147.50742 z m 212.84176,8.75614 -53.88399,141.44548 117.87123,0.33677 z"/></g></svg>'
    },
    {
        desc: 'Bus',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" xml:space="preserve"><path d="M0 0h48v48h-48z" fill="none"/><path d="M8 32c0 1.77.78 3.34 2 4.44v3.56c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h16v2c0 1.1.89 2 2 2h2c1.1 0 2-.9 2-2v-3.56c1.22-1.1 2-2.67 2-4.44v-20c0-7-7.16-8-16-8s-16 1-16 8v20zm7 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm18 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-12h-24v-10h24v10z" style="fill:{symbolColor}"/></svg>'
    },
    {
        desc: 'Circle',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" xml:space="preserve"><circle cx="15" cy="15" r="15" style="fill:{symbolColor}"/></svg>'
    },
    {
        desc: 'Square',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" xml:space="preserve"><rect x="0" y="0" width="30" height="30" style="fill:{symbolColor}"/></svg>'
    },
    {
        desc: 'Triangle',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" xml:space="preserve"><polygon points="16,0 32,32 0,32 16,0" style="fill:{symbolColor}"/></svg>'
    },
    {
        desc: 'Plane',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 -256 1792 1792" xml:space="preserve"><g transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 898.148 1786.34)"><path style="fill:{symbolColor}" d="m 1397 1324 q 0 -87 -149 -236 l -240 -240 l 143 -746 l 1 -6 q 0 -14 -9 -23 L 1079 9 q -9 -9 -23 -9 q -21 0 -29 18 L 753 593 L 508 348 Q 576 110 576 96 Q 576 82 567 73 L 503 9 Q 494 0 480 0 Q 462 0 452 16 L 297 296 L 17 451 q -17 9 -17 28 q 0 14 9 23 l 64 65 q 9 9 23 9 q 14 0 252 -68 L 593 753 L 18 1027 q -18 8 -18 29 q 0 14 9 23 l 64 64 q 9 9 23 9 q 4 0 6 -1 l 746 -143 l 240 240 q 149 149 236 149 q 32 0 52.5 -20.5 q 20.5 -20.5 20.5 -52.5 Z" /></g></svg>'
    },
    {
        desc: 'Plane',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 444.31 437.85" xml:space="preserve"><path style="fill:{symbolColor}" d="M 341.68 435.723 C 341.206 434.979 318.351 391.067 290.89 338.139 C 263.43 285.211 240.535 241.473 240.014 240.942 C 239.405 240.323 224.872 254.168 199.405 279.629 C 162.2 316.825 159.745 319.496 159.759 322.757 C 159.767 324.669 161.297 338.734 163.157 354.012 L 166.54 381.791 L 150.463 397.938 L 134.385 414.086 L 115.728 378.57 L 97.0715 343.055 L 61.9599 324.723 C 42.6485 314.641 26.8385 306.164 26.8266 305.885 C 26.8146 305.606 33.9051 298.287 42.5833 289.622 L 58.3618 273.866 L 89.3121 277.623 L 120.262 281.379 L 160.351 241.306 C 191.613 210.055 200.134 201.013 199.053 200.24 C 198.291 199.694 153.642 176.035 99.8337 147.664 L 2 96.08 L 22.2041 75.8759 L 42.4082 55.6719 L 163.17 87.6753 L 283.932 119.679 L 339.152 64.5695 C 377.856 25.9422 395.706 8.79049 398.836 7.22115 C 401.717 5.77583 405.776 4.82043 410.284 4.52586 C 419.155 3.94633 425.756 6.53903 431.627 12.9087 C 437.083 18.8278 438.851 23.2928 438.827 31.09 C 438.789 43.1332 439.47 42.3185 377.461 104.504 L 321.567 160.557 L 345.71 253.812 C 358.989 305.103 372.747 358.288 376.284 372.003 L 382.715 396.937 L 362.628 417.006 C 347.704 431.917 342.32 436.727 341.68 435.723 Z" /></svg>'
    },
    {
        desc: 'Plane',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 400 400" xml:space="preserve"><g transform="translate(-147.067 -109.447)"><path style="fill:{symbolColor}" d="M 157.987 184.385 L 173.375 168.2 C 182.386 159.189 197.56 162.315 197.56 162.315 L 242.59 168.476 L 265.396 146.16 C 277.411 134.36 288.263 152.414 283.542 158.636 L 271.833 172.246 L 320.326 181.228 L 336.787 162.039 C 354.381 141.012 367.47 159.955 359.532 171.112 L 348.895 184.569 L 421.758 194.072 C 484.408 133.781 509.985 108.773 526.469 123.63 C 543.06 138.584 513.713 168.389 456.641 227.177 L 467.002 302.247 L 482.267 289.526 C 491.278 282.017 507.279 294.064 490.758 309.726 L 469.761 329.528 L 478.62 378.665 L 491.739 368.581 C 503.325 359.355 517.395 371.555 501.732 388.291 L 480.888 409.288 C 480.03 409.932 487.693 452.386 487.693 452.386 C 492.413 473.198 480.673 480.802 480.673 480.802 L 466.358 493.278 L 411.98 339.674 C 407.474 326.157 396.055 311.479 376.974 313.221 C 366.889 314.294 341.416 331.49 337.983 335.567 L 279.006 392.275 C 277.504 393.348 288.079 465.996 288.079 465.996 C 288.079 468.142 269.381 492.665 269.381 492.665 L 232.014 426.147 L 213.561 434.73 L 224.351 417.932 L 157.067 379.953 L 182.295 361.5 C 194.31 364.289 257.303 371.37 258.591 370.726 C 258.591 370.726 309.888 319.853 312.816 316.776 C 329.766 298.968 335.469 292.315 338.044 283.518 C 340.621 274.714 336.231 261.812 309.628 245.477 C 272.939 222.949 157.987 184.385 157.987 184.385 Z" /></g></svg>'
    },
    {
        desc: 'Plane',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15" xml:space="preserve"><path style="fill:{symbolColor}" d="M6.8182,0.6818H4.7727 C4.0909,0.6818,4.0909,0,4.7727,0h5.4545c0.6818,0,0.6818,0.6818,0,0.6818H8.1818c0,0,0.8182,0.5909,0.8182,1.9545V4h6v2L9,8l-0.5,5 l2.5,1.3182V15H4v-0.6818L6.5,13L6,8L0,6V4h6V2.6364C6,1.2727,6.8182,0.6818,6.8182,0.6818z"/></svg>'
    },
    {
        desc: 'Diamond',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><polygon style="fill:{symbolColor};" points="0,16 16,32 32,16 16,0"/></svg>'
    },
    {
        desc: 'Star',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 51 48" xml:space="preserve"><path style="fill:{symbolColor};" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/></svg>',
    },
    {
        desc: 'Hexagon',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 28.4 24.6" xml:space="preserve"><g transform="translate(0,-272.4)"><path d="m 0,284.6998 7.1015266,-12.30021 14.2030544,0 7.101528,12.30021 L 21.304582,297 7.1015279,297 Z" style="fill:{symbolColor}"/></g></svg>'
    },
    {
        desc: 'Home',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" xml:space="preserve"><g transform="translate(0,448)"><path style="fill:{symbolColor};fill-opacity:1;stroke:{symbolColor;stroke-width:12;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none" d="m 16,256 240,-192 96,72 0,-32 48,0 0,72 96,80 -48,0 0,192 -120,0 0,-160 -96,0 0,160 -168,0 0,-192 z" transform="translate(0,-448)"/></g></svg>'
    },
    {
        desc: 'Tea cup',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 100 100" xml:space="preserve"><path style="fill:{symbolColor}" d="M72.31,69.335c2.334,1.65,5.198,2.62,7.919,2.62h3.181c6.231,0,11.3-5.069,11.3-11.301c0-6.23-5.068-11.299-11.3-11.299  h-7.983v-0.729H15.713v4.289c0,0.244,0.011,0.486,0.026,0.728c-0.016,0.431-0.026,0.861-0.026,1.296  c0,11.43,5.473,21.475,13.734,27.227H7.85c-1.413,0-2.559,1.146-2.559,2.559c0,1.414,1.146,2.559,2.559,2.559h8.99  c0,1.016,0.823,1.84,1.838,1.84H72.46c1.016,0,1.839-0.824,1.839-1.84h8.989c1.413,0,2.559-1.145,2.559-2.559  c0-1.412-1.146-2.559-2.559-2.559H61.685C66.209,79.015,69.897,74.581,72.31,69.335z M75.421,55.27h7.988  c2.97,0,5.386,2.416,5.386,5.385c0,2.97-2.416,5.386-5.386,5.386h-3.181c-2.038,0-4.438-1.12-5.821-2.709  C75.045,60.757,75.396,58.055,75.421,55.27z"/><path style="fill:{symbolColor}" d="M35.887,24.743c1.127-2.535,1.409-5.352,0.563-8.168c-0.563-2.253-3.098-3.943-5.352-2.817c0,0-0.281,0.282-0.281,0.564  c0.281,2.253,1.408,4.225,0.845,6.478c-0.845,2.816-2.816,4.788-3.662,7.604c-0.845,2.535-0.563,5.352,0.563,7.605  c0.776,1.294,1.612,2.38,4.359,2.38c0.677,0,1.226-0.548,1.226-1.226c0-0.189-2.074-4.941-0.797-7.633  C34.197,27.841,35.324,26.433,35.887,24.743z"/><path style="fill:{symbolColor}" d="M64.738,24.743c1.126-2.535,1.407-5.352,0.562-8.168c-0.562-2.253-3.099-3.943-5.352-2.817c0,0-0.281,0.282-0.281,0.564  c0.281,2.253,1.408,4.225,0.845,6.478c-0.845,2.816-2.816,4.788-3.661,7.604c-0.845,2.535-0.563,5.352,0.562,7.605  c0.777,1.294,1.612,2.38,4.359,2.38c0.677,0,1.227-0.548,1.227-1.226c0-0.189-2.074-4.941-0.798-7.633  C63.048,27.841,64.175,26.433,64.738,24.743z"/><path style="fill:{symbolColor}" d="M51.66,23.053c0.563-1.69,0.281-3.38,0.281-5.07c0-1.126-0.281-1.972-0.562-3.098c-0.027-0.109-0.102-0.224-0.148-0.326  c-0.051-0.108-0.102-0.216-0.156-0.322c-0.107-0.213-0.224-0.422-0.354-0.623c-0.268-0.41-0.592-0.78-0.953-1.111  c-0.363-0.333-0.763-0.638-1.196-0.875c-0.416-0.226-0.878-0.381-1.353-0.401c-0.379-0.016-0.762,0.034-1.132,0.113  c-0.365,0.078-0.755,0.151-1.049,0.399c-0.072,0.061-0.138,0.135-0.188,0.215c-0.109,0.176-0.079,0.345-0.019,0.533  c0.038,0.117,0.052,0.24,0.083,0.359c0.038,0.148,0.077,0.295,0.116,0.442c0.08,0.298,0.161,0.597,0.244,0.895  c0.168,0.604,0.341,1.207,0.501,1.813c0.156,0.59,0.304,1.185,0.409,1.787c0.104,0.591,0.158,1.193,0.101,1.793  c-0.061,0.635-0.248,1.244-0.459,1.844c-0.026,0.073-0.047,0.152-0.079,0.223c-1.408,3.099-3.38,5.633-4.225,9.013  c-0.845,3.38-0.845,7.323,1.409,10.14c1.126,1.127,3.098,2.253,4.788,1.127c0.282-0.282,0.563-0.563,0.563-0.845  c0-0.564,0-0.845-0.281-1.409c-1.127-2.535-1.409-5.352-0.563-7.887C48.843,28.687,50.815,26.151,51.66,23.053z"/></svg>'
    },
    {
        desc: 'Coffee cup',
        svg: '<svg xmlns="https://www.w3.org/2000/svg" height="16" width="32" viewBox="0 0 390 200"><g fill-rule="evenodd"><path style="fill:{symbolColor}" d="m330.82 2.0101l30.69 0.0328c15.72 6.9746 25.37 16.625 25.31 29.855-0.03 7.582-3.37 19.148-10.33 26.441-26.36 17.294-54.58 32.109-82.03 47.721l19.7-29.804 51.01-29.294c4.84-6.402 6.09-11.717 5.34-15.401-1.19-5.813-7.38-9.575-12.41-11.873h-28.79l1.51-17.678z"/><path style="fill:{symbolColor}" d="m3.5355 164.14h358.6c0.35 15.68-6.51 28.56-30.3 34.85h-298c-23.648-7.85-30.825-20.28-30.304-34.85z"/><path style="fill:{symbolColor}" d="m111.12 148.99c-46.308-35.55-75.509-81.851-74.755-146.98l294.96 0.0001c-4.1 74.769-38.73 114.48-78.78 147.99l-141.42-1.01z"/></g></svg>'
    },
    {
        desc: 'Pentagon',
        svg: '<svg width="30" height="39" viewBox="0 0 30 29"><g transform="translate(0,-268)"><path d="m 15.341123,267.81946 15.341123,11.14598 -5.859788,18.03457 -18.9626712,0 L -3.416885e-7,278.96544 Z" style="fill:{symbolColor}" transform="matrix(0.97776414,0,0,0.99381264,0,1.8376311)"/></g></svg>'
    }
];
/*

    {
        desc: '',
        svg: '',
        width:0,
        height:0,
        anchor:{
            x:0,
            y:0
        }
    },

    https://commons.wikimedia.org/wiki/Location_markers#/media/File:Red_Arrow_Down.svg
    https://upload.wikimedia.org/wikipedia/commons/d/d0/DeepPink_pog.svg
    https://commons.wikimedia.org/wiki/File:Map_symbol-pin.svg
    https://commons.wikimedia.org/wiki/File:Fxemoji_u1F4CD.svg
    https://commons.wikimedia.org/wiki/File:PICOL_icon_Pin.svg
    https://commons.wikimedia.org/wiki/File:Pin_in_Lila_L.svg
    https://commons.wikimedia.org/wiki/File:Pin_in_Lila_R.svg
    https://commons.wikimedia.org/wiki/File:Map_marker_font_awesome.svg
    https://commons.wikimedia.org/wiki/OOjs_UI_icons
    https://commons.wikimedia.org/wiki/Category:USNPS_map_symbols
    Pentagon: https://commons.wikimedia.org/wiki/File:Abstract-map-symbols.svg
    https://commons.wikimedia.org/wiki/Category:SVG_map_symbols_of_Sweden
    https://map-icons.com/

*/ 
//# sourceMappingURL=SVGPushpinTemplates.js.map