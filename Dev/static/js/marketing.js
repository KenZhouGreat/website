function get_week(e) {
    var e = new Date(e);
    e.setHours(0, 0, 0);
    e.setDate(e.getDate() + 4 - (e.getDay() || 7));
    var t = new Date(e.getFullYear(), 0, 1),
        n = Math.ceil(((e - t) / 864e5 + 1) / 7);
    return n
}
var timeline = [{
    map: "timeline/maps/day1.png",
    events: [{
        time: "9:10",
        ampm: "PM",
        venue: "Home",
        neighbourhood: "Hayes Valley",
        note: "Just decided: Netflix is the world's greatest creation."
    }, {
        time: "7:30",
        ampm: "PM",
        venue: "Syrah Wine Bar",
        neighbourhood: "North Beach",
        collage: "winebar.jpg",
        note: "A happy 1 year work anniversary for Sarah and a brilliant collection of wine tastings."
    }, {
        time: "3:10",
        ampm: "PM",
        venue: "The Office",
        neighbourhood: "Financial District"
    }, {
        time: "2:50",
        ampm: "PM",
        venue: "Dark Roast Cafe",
        neighbourhood: "Presidio Heights",
        collage: "darkroast2.jpg",
        note: "my best friend, the coffee junkie"
    }, {
        time: "12:30",
        ampm: "PM",
        venue: "The Greens Machine",
        neighbourhood: "South Beach"
    }, {
        time: "9:20",
        ampm: "AM",
        venue: "The Office",
        neighbourhood: "Financial District"
    }, {
        time: "9:00",
        ampm: "AM",
        venue: "Starbucks",
        neighbourhood: "Financial District"
    }, {
        time: "6:40",
        ampm: "AM",
        venue: "The Embarcardero",
        neighbourhood: "Downtown San Francisco",
        collage: "running collage.jpg",
        note: "Morning runs like this remind me of how lucky I am to live in such a beautiful place."
    }, {
        time: "6:00",
        ampm: "AM",
        venue: "Home",
        neighbourhood: "Hayes Valley"
    }]
}, {
    map: "timeline/maps/day2.png",
    events: [{
        time: "8:20",
        ampm: "PM",
        venue: "Home",
        neighbourhood: "Hayes Valley"
    }, {
        time: "7:30",
        ampm: "PM",
        venue: "Smitten Icecream",
        neighbourhood: "Hayes Valley",
        note: "Tonight's Special: Sweet Basil Icecream. Delicious!"
    }, {
        time: "5:50",
        ampm: "PM",
        venue: "Rich Table",
        neighbourhood: "Hayes Valley"
    }, {
        time: "4:10",
        ampm: "PM",
        venue: "Home",
        neighbourhood: "Hayes Valley"
    }, {
        time: "2:30",
        ampm: "PM",
        venue: "San Francisco International Airport",
        neighbourhood: "San Bruno"
    }, {
        time: "11:00",
        ampm: "AM",
        venue: "Newark International Aiport",
        neighbourhood: "Newark",
        note: "I guess it's time to head home"
    }, {
        time: "9:30",
        ampm: "AM",
        venue: "The Estate",
        neighbourhood: "Old Chatham",
        collage: "estate.jpg"
    }]
}, {
    map: "timeline/maps/day3.png",
    events: [{
        time: "7:30",
        ampm: "PM",
        venue: "The Estate",
        neighbourhood: "Old Chatham",
        collage: "meal.jpg",
        note: "This amazing dinner with old friends was the highlight of my trip!"
    }, {
        time: "6:30",
        ampm: "PM",
        venue: "New York-New Jersey Line",
        neighbourhood: "Jersey City",
        note: "My first time in New Jersey"
    }, {
        time: "5:10",
        ampm: "PM",
        venue: "Jacqueline Kennedy Onassis Reservoir",
        neighbourhood: "Manhattan",
        collage: "reserve2.jpg"
    }, {
        time: "4:30",
        ampm: "AM",
        venue: "Big City Bed & Breakfast",
        neighbourhood: "Upper Manhattan"
    }, {
        time: "1:30",
        ampm: "AM",
        venue: "American Museum of Natural History",
        neighbourhood: "Upper Manhattan"
    }, {
        time: "9:50",
        ampm: "AM",
        venue: "Manhattan Kitchens",
        neighbourhood: "Upper Manhattan"
    }, {
        time: "7:50",
        ampm: "AM",
        venue: "Big City Bed & Breakfast",
        neighbourhood: "Upper Manhattan"
    }]
}, {
    map: "timeline/maps/day4.png",
    events: [{
        time: "10:50",
        ampm: "PM",
        venue: "Big City Bed & Breakfast",
        neighbourhood: "Upper Manhattan"
    }, {
        time: "8:30",
        ampm: "PM",
        venue: "Bareburger",
        neighbourhood: "West Village"
    }, {
        time: "5:10",
        ampm: "PM",
        venue: "The Highline",
        neighbourhood: "The Meatpacking District",
        collage: "highline.jpg",
        note: "The High Line is a 1-mile linear NYC park, built on a section of the elevated former New York Central Railroad. Such a cool idea"
    }, {
        time: "4:00",
        ampm: "PM",
        venue: "Jefferson Market Courthouse",
        neighbourhood: "West Village"
    }, {
        time: "3:20",
        ampm: "PM",
        venue: "Magnolia Bakery",
        neighbourhood: "West Village",
        collage: "magnolia.jpg",
        note: "Who says no to a custard filled pumpkin cupcake from Magnolia Bakery?"
    }, {
        time: "2:30",
        ampm: "PM",
        venue: "Subway D- 6 Avenue Express",
        neighbourhood: "Upper Manhattan"
    }, {
        time: "1:10",
        ampm: "PM",
        venue: "Big City Bed & Breakfast",
        neighbourhood: "Upper Manhattan",
        collage: "BandB.jpg"
    }, {
        time: "1:10",
        ampm: "PM",
        venue: "New York Penn Station",
        neighbourhood: "Midtown West",
        note: "Hello New York City!"
    }, {
        time: "11:40",
        ampm: "AM",
        venue: "Parson's Truck Stop",
        neighbourhood: "Greenwich"
    }, {
        time: "9:00",
        ampm: "AM",
        venue: "Boston South Station",
        neighbourhood: "Boston",
        note: "until next time, Boston"
    }, {
        time: "8:50",
        ampm: "AM",
        venue: "The Grind",
        neighbourhood: "Boston"
    }, {
        time: "8:20",
        ampm: "AM",
        venue: "The Charles Hotel",
        neighbourhood: "Cambridge"
    }]
}, {
    map: "timeline/maps/day5.png",
    events: [{
        time: "10:20",
        ampm: "PM",
        venue: "The Charles Hotel",
        neighbourhood: "Cambridge"
    }, {
        time: "8:40",
        ampm: "PM",
        venue: "Andrea's Cucina",
        neighbourhood: "North End",
        note: "For future reference: order the sweet potato gnocchi!"
    }, {
        time: "4:30",
        ampm: "PM",
        venue: "Fenway Park",
        collage: "fenway.jpg",
        neighbourhood: "Boston",
        note: "Go Red Sox! Singing Sweet Caroline with 30,000 Sox fans was pretty epic."
    }, {
        time: "2:50",
        ampm: "PM",
        venue: "Boston Beer Works",
        neighbourhood: "Boston"
    }, {
        time: "10:20",
        ampm: "AM",
        venue: "The New England Aquarium",
        collage: "aquarium.jpg",
        neighbourhood: "Boston"
    }, {
        time: "8:40",
        ampm: "AM",
        venue: "The Coffee Chateaux",
        neighbourhood: "Copley Square"
    }, {
        time: "7:50",
        ampm: "AM",
        venue: "The Charles River Promenade",
        note: "Randomly walked right into a friend from grade school on my walk this morning",
        neighbourhood: "Cambridge"
    }, {
        time: "7:30",
        ampm: "AM",
        venue: "The Charles Hotel",
        neighbourhood: "Cambridge"
    }]
}, {
    map: "timeline/maps/day6.png",
    events: [{
        time: "9:30",
        ampm: "PM",
        venue: "The Charles Hotel",
        neighbourhood: "Cambridge"
    }, {
        time: "7:40",
        ampm: "PM",
        venue: "The Apple & The Fig",
        neighbourhood: "Beacon Hill"
    }, {
        time: "6:50",
        ampm: "PM",
        venue: "Boston Waterfront",
        neighbourhood: "Boston",
        collage: "waterfront.jpg",
        note: "I could get used to this"
    }, {
        time: "4:30",
        ampm: "PM",
        venue: "Faneuil Hall Marketplace",
        neighbourhood: "Boston"
    }, {
        time: "4:10",
        ampm: "PM",
        venue: "Boston Public Garden",
        neighbourhood: "South Boston",
        note: "I finally met up with Beth at the Gardens. I can't believe how beautiful Boston is- no wonder she likes it here",
        collage: "bostongarden.jpg"
    }, {
        time: "3:30",
        ampm: "PM",
        venue: "The Charles Hotel",
        neighbourhood: "Cambridge",
        collage: "charles hotel.jpg"
    }, {
        time: "2:50",
        ampm: "PM",
        venue: "Boston International Airport",
        neighbourhood: "East Boston"
    }, {
        time: "5:30",
        ampm: "AM",
        venue: "San Francisco International Airport",
        neighbourhood: "San Bruno"
    }]
}],
    old_percent = 0,
    old_pos = 0,
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    short_months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    scroller, slider, $timeline, timeline_height, $timelineInner, $statusbar, $header, slideshow_height, statusbar_height, header_height, max_opacity, scroll_stop, statusbar_change, tutorial_timeout, timeouts, $buffer0, $buffer1, $slidepanel0, $slidepanel1, scroll_headers = {}, current_buffer = 0,
    current_slide = 0,
    scrolled_to_bottom = !1,
    slideshow_data = [{
        url: IMG_PATH + "timeline/slideshow/bandb.jpg",
        ago: 3,
        venue: "Big City Bed & Breakfast"
    }, {
        url: IMG_PATH + "timeline/slideshow/estate3.jpg",
        ago: 2,
        venue: "The Estate"
    }, {
        url: IMG_PATH + "timeline/slideshow/boston.jpg",
        ago: 5,
        venue: "Boston Waterfront"
    }, {
        url: IMG_PATH + "timeline/slideshow/darkroast.jpg",
        ago: 0,
        venue: "Dark Roast Cafe"
    }, {
        url: IMG_PATH + "timeline/slideshow/estate.jpg",
        ago: 1,
        venue: "The Estate"
    }, {
        url: IMG_PATH + "timeline/slideshow/garden.jpg",
        ago: 5,
        venue: "Boston Public Garden"
    }, {
        url: IMG_PATH + "timeline/slideshow/highline.jpg",
        ago: 3,
        venue: "The Highline"
    }, {
        url: IMG_PATH + "timeline/slideshow/embacadero.jpg",
        ago: 0,
        venue: "The Embacadero"
    }, {
        url: IMG_PATH + "timeline/slideshow/estate2.jpg",
        ago: 2,
        venue: "The Estate"
    }, {
        url: IMG_PATH + "timeline/slideshow/fenway.jpg",
        ago: 4,
        venue: "Fenway Park"
    }],
    day_template = '<ul class="day">     <li class="dayheader"><span>$date</span></li>     <li class="map" style="background-image: url($map);"></li>     $events </ul>',
    event_template = '<li>     <div class="title">         <div class="time">             <span class="hour">$time</span>             <span class="ampm">$ampm</span>         </div>         <div class="headerText">             $note             <span class="venue">$venue</span>             <span class="neighbourhood">in $neighbourhood</span>         </div>         <div class="edit"></div>     </div>     $collage </li>',
    compile_day = function (t, n) {
        var r = "";
        for (e in t.events) {
            var i = t.events[e],
                s = event_template.replace("$time", i.time).replace("$ampm", i.ampm).replace("$venue", i.venue).replace("$neighbourhood", i.neighbourhood);
            s = s.replace("$note", i.note ? '<span class="note">' + i.note + "</span>" : "");
            i.collage && (i.collage = IMG_PATH + "timeline/" + i.collage);
            s = s.replace("$collage", i.collage ? '<div class="collage" style="background-image: url(\'' + i.collage + "');\"></div>" : "");
            r += s
        }
        var o = day_template.replace("$date", get_date(n)).replace("$map", IMG_PATH + t.map).replace("$events", r);
        return o
    }, set_time = function () {
        var e = new Date,
            t = e.getMinutes(),
            n = e.getHours();
        if (n > 12) {
            var r = "PM";
            n -= 12
        } else var r = "AM";
        t < 10 && (t = "0" + t);
        $("#statusbar span").text(n + ":" + t + " " + r);
        $(".bigtime").text(n + ":" + t);
        setTimeout(set_time, 6e4 - e.getSeconds() * 1e3)
    }, get_date = function (e) {
        var t = new Date;
        t.setDate(t.getDate() - e);
        return days[t.getDay() ? t.getDay() : 6] + ", " + months[t.getMonth()] + " " + t.getDate()
    }, get_abs_date = function (e) {
        var t = new Date;
        t.setDate(t.getDate() - e);
        return months[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear()
    }, get_datedelta = function (e) {
        if (e == 0) return "Today";
        if (e == 1) return "Yesterday";
        var t = new Date,
            n = new Date;
        n.setDate(n.getDate() - e);
        return get_week(t) - get_week(n) % 52 == 0 ? days[n.getDay() ? n.getDay() - 1 : 6] : get_week(t) - get_week(n) % 52 == 1 ? "Last " + days[n.getDay() ? n.getDay() - 1 : 6] : short_months[n.getMonth() - 1] + " " + n.getDate() + ", " + n.getFullYear()
    }, update_position = function () {
        var e = -this.y;
        for (var t in scroll_headers) e >= t && old_pos < t ? $("#date").text(scroll_headers[t][0]) : e < t && old_pos >= t && $("#date").text(scroll_headers[t][1]);
        var n = e / scroll_stop;
        if (e >= timeline_height && !scrolled_to_bottom) {
            scrolled_to_bottom = !0;
            mixpanel.track("Landing: Scrolled to end of timeline")
        }
        e < 0 && $("#slideshow").css({
            height: slideshow_height - e + "px",
            "margin-top": e + "px"
        });
        if (n <= 1) {
            $statusbar.css("background-color", "rgba(255,255,255," + n * max_opacity + ")");
            $header.css("top", slideshow_height - header_height - e + "px")
        }
        if (old_percent < statusbar_change && n >= statusbar_change) $statusbar.addClass("white");
        else if (old_percent >= statusbar_change && n < statusbar_change) $statusbar.removeClass("white");
        else if (n >= 1) {
            $statusbar.css("background-color", "rgba(255,255,255," + max_opacity + ")");
            $header.css("top", statusbar_height + "px")
        }
        old_percent = n;
        old_pos = e
    }, stop_tutorial = function () {
        if (timeouts && timeouts.length > 0) {
            mixpanel.track("Landing: Tutorial stopped");
            for (t in timeouts) clearTimeout(timeouts[t]);
            tutorial_timeout && clearTimeout(tutorial_timeout);
            timeouts = [];
            $("#tooltipslide").addClass("disabled")
        }
    }, start_tutorial = function () {
        $("#tooltipslide").removeClass("hidden");
        timeouts = [setTimeout(function () {
            $("#tooltipslide").addClass("visible")
        }, 2e3), setTimeout(function () {
            scroller.scrollTo(0, -424, 2e3, IScroll.ease.quadratic)
        }, 3e3), setTimeout(function () {
            scroller.scrollTo(0, 0, 2e3, IScroll.ease.quadratic)
        }, 6e3), setTimeout(function () {
            $("#tooltipslide").removeClass("visible").addClass("hidden");
            tutorial_timeout = setTimeout(start_tutorial, 5e3)
        }, 6e3)]
    }, init_slideshow = function () {
        $buffer0.css("background-image", "url(" + slideshow_data[0].url + ")");
        $buffer1.css("background-image", "url(" + slideshow_data[0].url + ")");
        current_buffer = 0;
        current_slide = 0;
        for (var e in slideshow_data) slideshow_data[e].date = get_abs_date(slideshow_data[e].ago);
        $(".slidedate", $slidepanel1).text(slideshow_data[0].date);
        $(".slideloc", $slidepanel1).text(slideshow_data[0].venue);
        next_slide()
    }, buffer_slides = function (e, t, n) {
        e.addClass("quickswap");
        t.addClass("quickswap");
        $(".slidedate", t).text(slideshow_data[n].date);
        $(".slideloc", t).text(slideshow_data[n].venue);
        t.css("left", "330px");
        e.css("background-image", "url(" + slideshow_data[n].url + ")");
        e.css({
            "-webkit-transform": "scale(1) translate3d(0px,0px,0)",
            "-moz-transform": "scale(1) translate3d(0px,0px,0)"
        });
        e.removeClass("quickswap");
        setTimeout(function () {
            t.removeClass("quickswap")
        }, 1e3)
    }, next_slide = function () {
        current_slide = ++current_slide % slideshow_data.length;
        current_buffer = ++current_buffer % 2;
        var e = current_buffer ? $buffer1 : $buffer0,
            t = current_buffer ? $buffer0 : $buffer1,
            n = current_buffer ? $slidepanel1 : $slidepanel0,
            r = current_buffer ? $slidepanel0 : $slidepanel1;
        current_buffer == 1 ? $buffer1.css({
            opacity: 1,
            "-webkit-opacity": 1,
            "-moz-opacity": 1
        }) : $buffer1.css({
            opacity: 0,
            "-webkit-opacity": 0,
            "-moz-opacity": 0
        });
        setTimeout(function () {
            buffer_slides(t, r, current_slide)
        }, 4e3);
        var i = Math.floor(-(Math.random() * 20 + 15)),
            s = Math.floor(Math.random() * 10 - 5);
        e.css({
            "-webkit-transform": "scale(1.2) translate3d(" + i + "px," + s + "px,0)",
            "-moz-transform": "scale(1.2) translate3d(" + i + "px," + s + "px,0)"
        });
        n.css("left", "10px");
        r.css("left", "-310px");
        setTimeout(next_slide, 8e3)
    };
$(document).ready(function () {
    $("#splash").height($(window).height());
    $(window).resize(function () {
        $("#splash").height($(window).height())
    });
    $("#learnmore").smoothScroll({
        speed: 800
    });
    $("#playstore").smoothScroll({
        speed: 800
    });
    setTimeout(function () {
        $("#tooltip").removeClass("hidden")
    }, 4e3);
    $timeline = $("#timeline");
    $timelineInner = $("#timeline-inner");
    $statusbar = $("#statusbar");
    $header = $("#header");
    $buffer0 = $("#buffer0");
    $buffer1 = $("#buffer1");
    $slidepanel0 = $("#slidepanel0");
    $slidepanel1 = $("#slidepanel1");
    slideshow_height = $("#slideshow").height();
    statusbar_height = $statusbar.height();
    header_height = $header.height();
    max_opacity = .9;
    scroll_stop = slideshow_height - statusbar_height - header_height;
    statusbar_change = .4;
    set_time();
    $(".bigdate").text(get_date(0));
    for (ago in timeline) $timelineInner.append(compile_day(timeline[ago], ago));
    $timelineInner.append($('<p id="yourlife">How will the story <br />of <strong>your</strong> life look like?</p>'));
    $("ul.day").each(function (e, t) {
        scroll_headers[$(t).position().top - statusbar_height - header_height] = [get_datedelta(e), e ? get_datedelta(e - 1) : "Today"]
    });
    scroller = new IScroll("#timeline", {
        probeType: 3,
        mouseWheel: !0
    });
    scroller.on("scroll", update_position);
    scroller.on("scrollEnd", update_position);
    scroller.on("scrollStart", stop_tutorial);
    $timeline.bind("mousewheel", stop_tutorial);
    timeline_height = $timeline.height();
    $statusbar.bind("click", function () {
        scroller.scrollTo(0, 0, 600)
    });
    tutorial_timeout = setTimeout(start_tutorial, 2e3);
    init_slideshow();
    mixpanel.track_links("a.appstore", "Landing page: App store badge");
    mixpanel.track_links("a.appstore_button", "Landing page: App store button");
    mixpanel.track("Landing: Phone loaded")
});