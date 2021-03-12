//need to replace with .env file
let process = {
    env: {
        GoogleCalendarAPIKey: 'sdfsdfsd',
        CalendarID: 'dsfsdf'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    function mobilecheck()
    {
        if (window.innerWidth >=768)
        {
            return false;
        }
        else
        {
            return true;
        }
    };

    var calendar = new FullCalendar.Calendar(calendarEl, {
        
        eventDidMount: function(info)
        {

        },
        headerToolbar:
        {
            right: 'prev,next',
            left: 'today',
            center: 'title',
        },
        buttonText:
        {   
            today: 'Today',
            next: '>',
            prev: '<',
        },
        bootstrapFontAwesome: false,
        themeSystem: 'bootstrap',
        initialView: mobilecheck() ? 'listMonth': 'dayGridMonth',
        showNonCurrentDates: false,
        contentHeight: 600,
        displayEventTime: false,
        googleCalendarApiKey: process.env.GoogleCalendarAPIKey,
        events: {
            googleCalendarId: process.env.CalendarID,
        },

        eventClick: function(info)
        {
            info.jsEvent.preventDefault(); //prevent redirect to google calendar onclick
        }
        
    });
    calendar.render();
  });
//TODO browser detection