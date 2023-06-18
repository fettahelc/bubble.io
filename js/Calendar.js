
        $(document).ready(function() {
            
            
            $('#calendar').fullCalendar({
                
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                defaultView: 'month',
                events: [
                    {
                        title: 'Barbie Discount',
                        title_Size: '12px',
                        width: '50px',
                        height: '50px',
                        start: '2023-06-2',
                        end: '2023-06-6'

                    },
                    {
                        title: 'Star Wars Discount',
                        title_Size: '12px',
                        width: '50px',
                        height: '50px',
                        start: '2023-06-14',
                        end: '2023-06-18'
                    },
                    {
                        title: 'Toy Story Discount',
                        title_Size: '12px',
                        width: '50px',
                        height: '50px',
                        start: '2023-05-20',
                        end: '2023-05-27'
                    },
                    {
                        title: 'Buy 2 for cost of 1 Day',
                        title_Size: '12px',
                        width: '50px',
                        height: '50px',
                        start: '2023-06-29',
                        end: '2023-06-30'
                    },
                    {
                        title: 'Barbie Discount',
                        title_Size: '12px',
                        width: '50px',
                        height: '50px',
                        start: '2023-07-9',
                        end: '2023-07-13'
                    }
                ],
                eventRender: function(event, eventElement) {
                    if (event.title) {
                            eventElement.find("span.fc-title").prepend("<span style='font-size:"+event.title_Size+"'>" + event.title +"</span>");
                    }
            },
            eventRender: function(event, eventElement) {
                if (event.title) {
                        eventElement.find("span.fc-title").prepend("<span style='width:"+event.width+"'>" + event.title +"</span>");
                }
            }
            
            }); 
            $('#calendar').fullCalendar({
                contentHeight: 600 });
                
            $('#calendar').css('font-size', '1.2em');
            $('#calendar').css('width', 'fit-content');
        });
