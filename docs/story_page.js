const storyPages = [
    // Each element of this array represents a page in the story
    `<p> 
        This is a story about Kitty who stumbled into a magical open source community and
        how she goes through the process of making a contribution to the OSS projects.
        <br>
        Please hover above the <b>bold texts in the story</b> to get a sense of what they mean in actual OSS projects.

        <br><br><br> Click next to start the story...
        </p>
    `,
    `Page:1
    <p> 
        Kitty couldn't believe it was a <b>machine</b> -- a huge glass sphere floating above the city, it took up as much space as the city.
        There were some funny-looking city dwellers releasing new <b>dragons</b> into the machine, dragons of all sizes flying inside it, 
        doing their own chores systematically to make the machine work.
        </p>
        <p>
        It had everything Kitty was in love with: machines, magic and dragons. She couldn't hold herself back from exploring this strange city further.   
        She came to know that the funny-looking people were called the <b>code-knitters</b> and they could write magical spells to summon new dragons that they
        added to the machine to make it better.
        Intrigued by the prospect of summoning her own <b>dragon</b>, Kitty delved into the world of <b>code-knitters</b>.
        </p>
        `,
        `
        Page:2
        <p>
            The code-knitters lived harmoniously in their city called "<b>Repositown</b>", knitting the spells together.  
            Kitty also learned that these code-knitters were always on 
            the lookout for new members to join their ranks and contribute to the summoning 
            of even mightier dragons. Sometimes, some of the existing dragons fell ill and they could also use some help to treat them as well.
            </p>
            <p>
            Each Repositown had a special book called <b>The Golden Book</b>. It contained all the spells that had summoned the dragons and the code-knitters used
            these spells to control the dragons
            above -- changing any spell in the Golden Book would change how the dragons behaved. A code-knitter could summon a dragon only if they were
             able to add their magic spell to the Golden Book of the Repositown.
        </p>`,
        `
        Page:3
        <p>
        </p>`,
        `
        Page:4
        <p> 
            Everything was new and exciting for Kitty and she wanted explore the Repositown further. All of the code-knitters were friendly and
            she was given a <b>handbook-to-read</b> that gave her information about the Repositown and the dragons.
            She found out that the code-knitters had a tradition of gathering regularly in large <b>forums</b> to discuss 
            spells, dragons, their health and other magical matters. Though warmly welcomed into the group, 
            Kitty found it a bit challenging to grasp the complexities of their discussions. 
            Undeterred, she decided to navigate the new city, acknowledging that some 
            tasks would indeed be complex for her.
        </p>
        `,
    `Page:5
    <p>
        Determined, Kitty sought the guidance of a <b>mentor</b> who taught new citizens of the city.
        He showed her to the temple that held the most treasured item of the Repositown -- the Golden Codebook and guided her 
        on the process of finding the category of spells that matched her interests.
        Along with sharing his wisdom, he also advised her to go through the chronicles kept in the temple's library.
        Soon, Kitty was diving deep into the <b>history of the Golden Codebook</b>
        and document outlining the <b>behaviors expected</b> in the city. He also emphasized she should try to understand the 
        spells already existing in Golden Codebook
        to enhance her chances of summoning mightier dragons.
        </p>
    `,
    `
    Page:6
        <p>
            The library had so much information about the city, the machine and the dragons. Kitty couldn't stop herself from diving in more deeper.
             The most helpful ones for her were the <b>documents</b> describing the spells in the Golden Codebook. As she went through the spells,
             she realized that it could be easier for her to find the mistakes in the spells rather than create new spells, at least in the beginning of 
             her journey. She became curious about things that could go so wrong in the spells that made those mighty dragons ill.
             </p>
             <p> 
             Fortunately, she found a catalog of these <b>issues</b>. She saw that issues ranged from simple to complex based on the illness of the dragons.
             The code-knitters were thoughtful enough to categorize them so that code-knitters of all skill levels could help to solve according to their
             ability.

        </p>`,
        `
        Page:7
        <p>

            Staying with the mentor, Kitty learned the intricacies of the Golden Codebook. The most shocking event
            in her whole journey was when he told her that the no new citizen can add any new spells to the 
            Golden Codebook.
            How was she supposed to correct the spells in the Golden Codebook to treat the dragons if she could't add any
            spells to the Golden Codebook?
            </p>
        <p>
                The mentor was delighted by the brilliance of her question. He reminded her how important the spells in the Golden Codebook
                were for the proper functioning of the dragons above. New citizens of the city may not have enough expertise or may unintentionally
                make changes that could wreak havoc on the dragons. The solution the code-knitters invented for that problem was providing each new citizen their own
                <b>Silver Codebook</b>.
                </p>
                <p>
                The code-knitters called this process "forking". The Silver Codebook was created by replicating the Golden Codebook and had to remain inside 
                the temple at all times. She could create new pages in the Silver
                Codebook and later ask the mentor or any other elders to add those spells to the Golden Book. The elders would add them to the Golden Book only
                after reviewing her changes deliberately.
            </p>
            `,
            `
            Page: 8
            <p>
            Kitty was very glad when she received a Silver Codebook where she could make her changes but she soon realized that making changes in
            Silver will be a bit unwieldy as it couldn't be carried outside the temple. To solve that
            problem, Kitty got an idea. She would <b>clone</b> the Silver Codebook to a <b>Wooden Codebook</b> and make changes there.
            The wood was a perfect material to experiment upon -- handy and she could carry it anywhere. 
            When she felt satisfied with a new spell in the Wooden Codebook, she could then <b>update</b>
            the Silver Codebook with those changes. 
        </p>`,
        `
        Page:9
        <p>
            After getting the hang of the different types of books, Kitty started focusing on the issues in the spells to cure the dragons.
            Most problems were deeply magical and incomprehensible for her level, but Kitty navigated to the issues category that suited her and picked 
            a manageable issue. She observed the dragon that had the illness and she felt immense pity that such a beautiful creature had to bear any suffering.
            She consulted fellow code-knitters about the issue to understand it better. She, then,  
            started to experiment in her wooden codebook tirelessly. After a long trial of changing the spell, it finally seemed 
            to work, her <b>first magic spell</b>.
        </p>`,
        `
        Page:10
            <p>
        Confident in her new spell, Kitty <b>updated the changes</b> in a new page of her Silver Codebook.
        She then made a <b>request to merge</b> her spells to the Golden Codebook. An elder
        meticulosly checked her spells and finally obliged to <b>merge</b> her request.
        A small whirl of wind appeared above Kitty and the dragon she had been working on came to her and paid respects.
         </p>
         <p> It was her first time meeting a dragon and she was filled with immense joy, a sense of fulfillment and a sense of belonging.
            Kitty now started to feel confident that she can write her own magic spells, contribute more to the Golden Codebook and summon her own dragons.
             The journey of Kitty, the aspiring code-knitter, had only just begun.
        </p>`,
    // Add more pages as needed
];