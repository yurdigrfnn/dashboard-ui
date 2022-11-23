import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "@emotion/styled"
export const StyleWrapper = styled.div`
  .fc-button.fc-prev-button, .fc-button.fc-next-button, .fc-button.fc-cancleEvent-button{
    background: #Cbd5d8;
    background-image: none;
    border: none;
    color: #1a202c;
    text-shadow: none;
    box-shadow: none;
    border-radius: 0.375rem;
    padding: 0.5rem 1.25rem;
    
}
.fc-button.fc-prev-button:hover, .fc-button.fc-next-button:hover ,.fc-button.fc-cancleEvent-button:hover {
    background: #Cbd5d8;
    background-image: none;
    border: none;
    color: #1a202c;
    text-shadow: none;
    box-shadow: none;

}
.fc-button-primary {
}
.fc-button-primary:not(:disabled):hover {
}
.fc-addEvent-button{
    background: #00AF87;
    background-image: none;
    border: none;
    color: #fff;
    text-shadow: none;
    box-shadow: none;
    border-radius: 0.375rem;
    padding: 0.5rem 1.25rem;
}
.fc-button.fc-addEvent-button:hover{
    background: #00AF87;
    background-image: none;
    border: none;
    color: #fff;
    text-shadow: none;
    box-shadow: none;
}

.fc-button.fc-addEvent-button:disabled{
    background: #00AF87;
    background-image: none;
    border: none;
    color: #fff;
    text-shadow: none;
    box-shadow: none;
}
.fc-button.fc-addEvent-button:disabled:active{
    background: #06A07D;
    background-image: none;
    border: none;
    color: #fff;
    text-shadow: none;
    box-shadow: none;
}
.fc-button.fc-cancleEvent-button{
   margin-right: 0.5rem;
   border-radius: 0.375rem;
}
.fc-button.fc-cancleEvent-button:hover{
    
}
.fc td, .fc th {
    border-style: none;
  }
.fc-daygrid-day{
    background: #F2F2F5;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    padding: 0.5rem 1.25rem;

}
`
export default function Calendar() {
    return (
        <StyleWrapper>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            events={[
                { title: "event 1", date: "2022-11-23" },
                { title: "event 2", date: "2022-11-23" },
            ]}
            headerToolbar={{
                left: "prev",
                center: "title",
                right: "next",
            }}
            customButtons={{
                addEvent: {
                    text: 'Add Event',
                    click: function () {
                        alert('clicked the custom button!');
                    },
                },
                cancleEvent: {
                    text: 'Cancle',
                    click: function () {
                        alert('clicked the custom button!');
                    },
                },

            }}
            footerToolbar={
                {
                    left: 'today',
                    right: 'cancleEvent addEvent'
                }
            }
           
        />
        </StyleWrapper>
    );
}