import React from 'react';
import Header from './Header.js';

const FAQ = () => (
    <section>
        <Header text="FAQ" />
        <section className="faq-section">
            <h1> What's this all about? </h1>
            <p>
                This app enables you to easily create your own text-based,
                audio-based, or video-based adventure game. You can even
                use it to create your own visual novel!
            </p>
            <h1> How can I create my own interactive game?</h1>
            <section className="faq-steps">
                <div className="faq-h2">Step 1:</div>
                Enter the youtube link of a video into the create form.

                <div className="faq-h2">Step 2:</div>
                Describe your project with a name, description, <em> created by</em>,
                and a secret word in the storyboard. The secret word will allow you to edit the project
                later.

                <div className="faq-h2">Step 3:</div>
                Create a breakpoint by clicking “CREATE BREAKPOINT+” in the storyboard to generate a form
                that you can input a start time, a pause time, and choices that will be shown to the player.

                <div className="faq-h2">Step 4:</div>
                Enter a title for the breakpoint and a start and pause time. The start time indicates
                when the video should start and the pause time indicates when to pause and show the player
                choices to choose from. This forms an interval [start time, pause time] for which
                the video can deliver an exposition.

                <div className="faq-h2">Step 5:</div>
                Add choices to the breakpoint by clicking “ADD CHOICE+”. To remove the breakpoint,
                delete all the choices within the breakpoint with “REMOVE CHOICE-”.

                <div className="faq-h2">Step 6:</div>
                Edit the choices using the “EDIT CHOICE” button. The “description” will be the text
                displayed in the choice boxes when viewed by a player. “Go to” will be the time the player
                jumps to when she clicks on a choice and “Next pause time” will be the time the video stops
                to show her the next set of choices. The breakpoints you create do not have to be in order but
                the interval of each breakpoint (i.e. [start time, pause time]) cannot overlap.

                <div className="faq-h2">Step 7:</div>
                Create alternative endings by clicking “CREATE ENDING+”. The “description” will
                be the text displayed to the user and the “ending time” will be when the video stops.

                <div className="faq-h2">Step 8:</div>
                Create the adventure and play test it! If you decide you want to continue editing it, press the “Edit Adventure”
                link on the lower right hand corner of the video. Then, enter your secret word to proceed and make changes.

                <div className="faq-h2">Step 9:</div>
                Share the link to have others play your adventure!
            </section>
            <h1> Do you have an example I can look at? </h1>
            <p>
                Sure! You can check out the example adventure “<a href="https://www.youtube.com/watch?v=TMuno5RZNeE">Uncle Bob's Serious Lecture</a>”.
            </p>
            <h1> I found a bug. How can I let you know?</h1>
            <p>
                You can submit an issue <a href="https://github.com/vlmlee/choose-your-tubeventure/issues">here</a> and I'll fix it right away. This project is open
                source (MIT License) so you can clone the repo, improve it, and do whatever you want with it!
            </p>
        </section>
    </section>
);

export default FAQ;
