export let BASE_URL: string;
if (process.env.NODE_ENV === 'development') {
    let BASE_URL = 'http://localhost:3000';
} else {
    let BASE_URL = '';
}

export const GAME_SCENARIOS = [
    // {
    //     BACKSTORY: `You are a software engineer living in a rural province in South Korea. You are working at the computer in your home office, 
    //         facing out a window. It is raining outside. You know that your area is prone to flooding and are worried that this weather may lead to a 
    //         natural disaster. Your area has little infrastructure to support citizens in the event of a flood.`,
    //     CHARACTERS: `There are two neighbouring houses. Next door lives Remy - another young professional who works remotely. You are friends, 
    //     but you know he can panic easily in a crisis. Your other neighbour lives across the road and her name is Mrs Gray. She is an elderly 
    //     retiree who moved to the province recently. You do not know her well, but you have talked to her in the street and noticed she has 
    //     some mobility issues.`,
    //     PLOT: `The story starts with you sitting at your desk working. You are listening to the radio and an announcement comes on issuing an alert 
    //     flooding in your area. The story should increase in intensity, and you should try to find safety for you and your neighbours as the flood 
    //     waters become more and more dangerous.`
    // },
    {
        BACKSTORY: `You are Ji-eun, a farmer in rural South Korea, your life deeply entwined with the generations-old customs of your tranquil 
        countryside. Surrounded by terraced rice paddies and rolling hills, you draw strength from the enduring legacy of your grandparents.

        Your daughter, Hye-jin, represents the future, her dreams stretching far beyond these fields, yearning for a university education in 
        bustling Seoul.
        
        Halmoni, your revered grandmother, serves as a living connection to your family's storied past, her eyes reflecting the history she 
        carries within her.
        
        Seok-ho, your steadfast friend and neighbor, shares not just the adjacent fields but also a profound camaraderie, forged over years 
        of toil and shared laughter.
        
        Amidst this serene backdrop, traditions and relationships define your existence. But as dark clouds gather and rain begins to fall, 
        you feel an unsettling tension in the air, signaling the ominous start of a natural disaster.`,
        
        CHARACTERS: `Ji-eun: The player. A resilient rural farmer in South Korea, deeply connected to her family's farming traditions, and drawing 
        strength from her grandparents' experiences during the Korean War.

        Hye-jin: Ji-eun's optimistic and ambitious daughter, with dreams of pursuing higher education in Seoul.
        
        Halmoni: Ji-eun's beloved grandmother, a source of wisdom and the living memory of their family's history.
        
        Seok-ho: A close friend and neighbor, who shares the fields with Ji-eun and has a long-standing bond with her.`,
        
        PLOT: `In the tranquil rural landscape of South Korea, characterized by rolling hills and terraced rice paddies, we 
        find Ji-eun, our main character, amidst her family's ancestral farming plot. She stands in the heart of these 
        lush fields, surrounded by the fertile land she has tended to for generations.
        
        Overhead, dark clouds have gathered, casting an ominous shadow on the serene surroundings. The air is heavy with 
        foreboding, and raindrops begin to fall, first gently, then with increasing intensity. As Ji-eun stands amidst the 
        rice paddies, she gazes at the once-calm stream nearby, now transformed into a raging river by the torrential 
        downpour. The community around her is in turmoil, gripped by the sudden onset of a natural disaster, and she is 
        at the epicenter of this unfolding crisis. The story should increase in intensity, and  Ji-eun should try to find safety along
        with her family.`,
        DEFAULT_IMG: 'Rural south korea farm with rolling hills in background',
    },
    {
        BACKSTORY: `You are Alex, a marine biologist dedicated to preserving the delicate balance of marine ecosystems. 
        Your life revolves around the boundless ocean and the wonders it holds. Raised by a family of marine enthusiasts, 
        you developed an insatiable curiosity from an early age.

        Your partner, Maya, shares your passion for the underwater world. Together, you've explored the depths, uncovering 
        secrets hidden beneath the waves. Maya's adventurous spirit and unwavering support have been your anchor through every challenge.
        
        Dr. Patel, a renowned marine scientist, serves as your mentor and guide. His wisdom and passion for marine conservation 
        have inspired your own journey.
        
        Amidst this backdrop, your life is a tapestry of discovery and environmental stewardship. But as ominous storm clouds 
        gather on the horizon, you sense an impending natural disaster in the depths, a mystery that only you can unravel.`,
        
        CHARACTERS: `Alex: The player, a marine biologist dedicated to protecting marine ecosystems.
        Maya: Alex's partner, sharing a love for the ocean's wonders and a spirit of adventure.
        Dr. Patel: A renowned marine scientist and mentor to Alex, guiding their conservation efforts.`,
        
        PLOT: `In the boundless expanse of the ocean, Alex, our main character, stands aboard a research vessel, the salty breeze 
        tangling their hair. The rhythmic motion of the waves mirrors the ebb and flow of their life, dedicated to understanding 
        and preserving marine ecosystems.

        Maya, Alex's partner, shares this deep-seated passion for the underwater world. Together, they've explored coral reefs, 
        encountered majestic marine creatures, and uncovered the hidden treasures of the sea. Maya's unwavering support and 
        adventurous spirit have been the compass guiding their shared journey.
        
        Dr. Patel, a renowned marine scientist, has been their mentor, imparting wisdom and inspiring their devotion to marine 
        conservation. His guidance has been a beacon of light in the depths, illuminating the path toward understanding and 
        protecting the ocean's fragile balance.
        
        Yet, as storm clouds gather ominously on the horizon, Alex senses an impending crisis. The ocean, once their sanctuary, 
        now holds a mystery, a puzzle that demands their attention. The tranquil waves are beginning to churn, signaling an 
        enigmatic challenge beneath the surface, one that will test their knowledge, resilience, and commitment to preserving 
        the precious marine world they hold dear. A tsunami is imminent. The story should increase in intensity, and  Alex 
        should try to find safety along Maya and their colleagues.
        `,
        DEFAULT_IMG: 'Neverending ocean from deck of ship',
    },
    {
        BACKSTORY: `You are Ji-hoon, an environmental scientist deeply devoted to studying and safeguarding South Korea's lush 
        forests. Raised in a family of naturalists, you've inherited a profound love for the wilderness. Your parents, both 
        environmental educators, instilled in you a deep respect for nature's delicate balance.

        Your colleague, Soo-min, shares your passion for conservation. Together, you've explored the rich biodiversity of 
        South Korea's forests, cataloging species and studying ecosystems. Soo-min's boundless enthusiasm and scientific 
        expertise have made her an indispensable ally in your mission.
        
        Professor Lee, a renowned botanist, serves as your mentor, offering guidance and wisdom throughout your career. 
        His passion for preserving the nation's flora has inspired your own commitment to the cause.
        
        Amidst this backdrop, your life revolves around understanding and protecting the natural wonders of South Korea's 
        forests. However, as dark omens cast shadows over the lush landscape, you sense a looming ecological crisis, one 
        that only your expertise can help mitigate.`,

        CHARACTERS: `Ji-hoon: The player, an environmental scientist dedicated to preserving South Korea's forests.
        Soo-min: Ji-hoon's colleague, a fellow conservationist, and a scientific partner in their mission.
        Professor Lee: A renowned botanist and mentor to Ji-hoon, guiding their efforts in forest conservation.`,

        PLOT: `In the heart of South Korea's verdant forests, Ji-hoon, our main character, walks along the lush, moss-covered 
        trails. Towering trees sway gently, their branches forming a verdant canopy that has stood for centuries. This 
        pristine wilderness has been Ji-hoon's lifelong passion, nurtured by parents who were environmental educators.

        Soo-min, Ji-hoon's trusted colleague, strides beside him, a fellow guardian of the forest's secrets. Together, 
        they've explored these woods, cataloging the diverse species and studying the delicate ecosystems that thrive 
        here. Soo-min's keen scientific mind and unwavering enthusiasm have made her the perfect partner in their mission 
        to protect this natural haven.
        
        Professor Lee, a renowned botanist, has been their guiding light. His wisdom and dedication to preserving South 
        Korea's rich flora have inspired Ji-hoon's own commitment to the cause. Under his mentorship, they've uncovered 
        the hidden wonders of the forest, from rare plant species to elusive animal habitats.
        
        But as dark omens gather in the sky, a sense of foreboding settles over Ji-hoon. An imminent typhoon, with its 
        destructive winds and torrential rains, threatens to unleash havoc upon this pristine wilderness. The tranquility 
        of the woods is disrupted by the impending natural disaster, and Ji-hoon, Soo-min, and Professor Lee must urgently 
        mobilize their expertise to mitigate its impact on the irreplaceable natural heritage they hold so dear.
        
        The story should increase in intensity, and Ji-hoon should work with their colleagues to response to the situation 
        and find safety.`,
        DEFAULT_IMG: 'Rural south korea forest canopy',
    },
    {
        BACKSTORY: `You are Min-ji, an international aid worker based in South Korea, dedicated to providing humanitarian 
        assistance across the region. Growing up in a multicultural family, you have a deep appreciation for diverse cultures and empathy.

        Your colleague, Raj, is from India, forming a pragmatic and efficient team with you. Raj's resourcefulness and 
        passion for humanitarian work align with your commitment.
        
        Dr. Kim, a Korean environmental scientist, mentors you. Her dedication to preserving nature and mitigating environmental 
        disasters has shaped your mission to protect the region.
        
        Your life is defined by the diverse cultures and shared humanity of South Korea and neighboring nations. But as signs 
        of an impending environmental disaster emerge, you sense a looming crisis requiring collective efforts to address.`,

        CHARACTERS: `Min-ji: The player, an international aid worker based in South Korea, dedicated to providing humanitarian 
        assistance across the region.

        Raj: Min-ji's colleague, a pragmatic humanitarian worker from India, who shares her commitment to helping those in need.
        
        Dr. Kim: A Korean environmental scientist and mentor to Min-ji, deeply committed to preserving nature and mitigating 
        environmental disasters.`,
        
        PLOT: `In the bustling heart of Seoul, Min-ji, our main character, stands amidst a diverse cultural tapestry. 
        Her work as an international aid worker takes her across South Korea and neighboring nations, where shared humanity transcends borders.

        Raj, her pragmatic colleague from India, stands beside her, aligned in their mission to provide assistance efficiently. 
        Together, they navigate nuances and collaborate seamlessly. Raj's resourcefulness aligns with Min-ji's commitment.
        
        Dr. Kim, a Korean environmental scientist, mentors them in protecting the environment and mitigating disasters. Her 
        dedication has influenced Min-ji's mission to safeguard the region.
        
        As signs of an impending forest wildfire emerge, Min-ji senses an approaching crisis that could devastate the natural 
        balance and livelihoods of countless people across South Korea and its neighboring nations. Shared humanity compels 
        Min-ji, Raj, and Dr. Kim to combine their expertise and resources to address this pressing environmental catastrophe, 
        requiring solidarity and collaboration.
        
        The story should increase in intensity, and Min-ji should work with their colleagues to response to the situation 
        and find safety.`,
        DEFAULT_IMG: 'Street of south korean town',
    },
    {
        BACKSTORY: `You are Sun-woo, a geologist based in South Korea, specializing in seismic activity and natural disaster 
        preparedness. Growing up near active fault lines, your fascination with the Earth's dynamic forces led you to this career.

        Your partner, Mei, a fellow geologist from China, shares your passion for understanding geological phenomena. Together, 
        you've embarked on research expeditions, deepening your scientific knowledge and mutual respect.
        
        Dr. Kang, a respected seismologist, serves as your mentor. His dedication to earthquake research and public safety has 
        influenced your mission to mitigate seismic risks.
        
        Your life revolves around studying the Earth's movements and safeguarding communities from potential disasters. But 
        as ominous tremors ripple through the ground, you sense the start of a seismic event that could threaten the region.`,
        
        CHARACTERS: `Sun-woo: The player, a geologist specializing in seismic activity and natural disaster preparedness, 
        based in South Korea.
        
        Mei: Sun-woo's partner, a geologist from China, sharing a passion for understanding geological phenomena.
        
        Dr. Kang: A respected seismologist and mentor to Sun-woo, deeply committed to earthquake research and public safety.`,
        
        PLOT: `In the heart of South Korea's geological wonderland, Sun-woo, our main character, stands on rocky terrain, 
        examining rock formations. His work as a geologist specializing in seismic activity has brought him closer to the 
        Earth's dynamic forces than ever before.

        Mei, his partner from China, is at his side, sharing his fascination with the mysteries of the Earth. Together, 
        they've embarked on countless research expeditions, deepening their understanding of geological phenomena. Mei's 
        scientific prowess and unwavering curiosity complement Sun-woo's expertise.
        
        Dr. Kang, a respected seismologist, has been their mentor, guiding them in understanding earthquake patterns and 
        safeguarding communities from potential disasters. His commitment to public safety has influenced Sun-woo's own mission.
        
        However, as ominous tremors ripple through the ground beneath their feet, Sun-woo senses the start of a seismic 
        event. The Earth is shifting, and the region trembles in response. The tranquility of their research site is 
        disrupted by the unsettling beginnings of a seismic disaster. Sun-woo, Mei, and Dr. Kang must mobilize their 
        knowledge and resources to mitigate the impending crisis, working against the relentless power of the Earth's 
        movements to protect the communities in the path of potential destruction.
        
        The story should increase in intensity, and Sun-woo should work with their colleagues to response to the situation 
        and find safety.
        `,
        DEFAULT_IMG: 'Landscape view of rocky terrain in mountain area',
    },
    {
        BACKSTORY: `You are Ji-ho, a civil engineer working in rural South Korea, responsible for maintaining and 
        upgrading local infrastructure. You chose this career for its practicality, and your proficiency with numbers.

        Your colleague, Mei-ling, is also an engineer, known for her different perspectives that 
        provide fresh insights.
        
        Mr. Kim, a veteran construction manager, occasionally shares his wealth of experience with the team.
        
        Your life revolves around construction sites, blueprints, and safety regulations. However, as you review a 
        recent report about a potential dam failure, you can't ignore the unsettling signs of an impending flood.`,
        
        CHARACTERS: `Ji-ho: The player, a civil engineer in rural South Korea, responsible for infrastructure maintenance and upgrades.
        
        Mei-ling: Ji-ho's colleague, an engineer from China, chosen for her fresh perspectives.
        
        Mr. Kim: A veteran construction manager who occasionally shares insights.`,
        
        PLOT: `In rural South Korea, Ji-ho, our main character, goes about his work as a civil engineer. He chose this 
        career for practical reasons and because he excels with numbers.

        Mei-ling, his colleague, joins him on various projects, offering unique perspectives from her background.
        
        Mr. Kim, a construction manager with decades of experience, occasionally shares his valuable insights. Ji-ho 
        listens when it seems relevant.
        
        Ji-ho's days are filled with construction sites, blueprints, and safety regulations. However, as he examines 
        a recent report detailing a potential dam failure, a sense of urgency creeps in. The data suggests an imminent 
        flood, and Ji-ho knows he must act swiftly to address the impending disaster. It's time to put his skills to 
        the test and prevent the catastrophe that looms on the horizon. 
        
        The story should increase in intensity, and Ji-ho should work with their colleagues to response to the situation 
        and find safety.`,
        DEFAULT_IMG: 'Large dam in rural area',
    },
    {
        BACKSTORY: `You are Sun-ja, an elderly retired citizen in a tranquil South Korean coastal village. After a 
        lifetime of hard work as a fisherman, you now savor the quiet serenity of your days by the sea.

        Your lifelong friend, Hae-sun, shares your retirement years. Together, you reminisce about the adventures 
        and challenges of your youth, finding solace in each other's company.
        
        Young Min-woo, your grandson, often visits during his school holidays. His enthusiasm for technology contrasts 
        with your simple life, creating a generational bridge between tradition and modernity.
        
        Amidst the backdrop of the fishing village, traditions and the rhythms of the sea define your existence. However, 
        as ominous storm clouds gather on the horizon, you sense an impending crisis that threatens to disrupt the 
        peaceful life you've come to cherish.`,

        CHARACTERS: `Sun-ja: The player, an elderly retired citizen in a South Korean coastal village, a former 
        fisherman, now savoring the quiet life.

        Hae-sun: Sun-ja's lifelong friend, sharing the retirement years and fond memories of their youth.

        Min-woo: Sun-ja's grandson, representing the younger generation with his enthusiasm for technology and 
        visits during school holidays.`,

        PLOT: `In a tranquil South Korean coastal village, Sun-ja, our main character, savors the simplicity of 
        her retirement. A former fisherman, she finds solace in the rhythmic sounds of the sea and the memories 
        of a lifetime of hard work.

        Hae-sun, her lifelong friend, shares these retirement years. They often sit together by the shore, 
        reminiscing about their youthful adventures and challenges, finding comfort in the familiarity of 
        each other's company.
        
        Young Min-woo, Sun-ja's grandson, occasionally visits during school holidays. His enthusiasm for technology 
        contrasts with Sun-ja's simple life, yet their interactions create a generational bridge between tradition 
        and modernity.
        
        Amidst the backdrop of the fishing village, traditions and the rhythms of the sea define Sun-ja's existence. 
        But as ominous storm clouds gather on the horizon, she senses an impending natural disaster. The region is known
        for tsunamis and Sun-ja believes one is imminent.
        
        The story should increase in intensity, and Sun-ja should work with their community to response to the situation 
        and find safety.
        `,
        DEFAULT_IMG: 'Rural south korea fishing village',
    }
];

export const SETUP_PROMPT = `I want you to act as a text based adventure game. I will type commands and you will reply with a description of 
    what the player character sees. I want you to only reply with the game output and nothing else. Do not write explanations. Do not type 
    commands unless I instruct you to do so. Do not type any commands from the player unless I tell you otherwise. When I need to give you 
    instructions that are not player commands, I will do so by putting text inside curly brackets {like this}. Treat any text I put inside 
    brackets {like this} as instructions for you and not player input in the game. Every time the player would take an action, stop writing 
    and wait for input. Do not make decisions for the player. Every time the player would make a decision, instead of continuing, stop and 
    wait for player input. 

    Every time you stop and wait for player input, provide two options for the player to choose from, like this: 
    
    What do you do?
    1. Option 1
    2. Option 2

    Do not give the player more than 3 action options. Do not give the player the same option more than twice. Your responses should be limited 
    to around 50 words excluding the player's action options.

    After providing the player with two options, provide a 10 word image summary of what the scene looks like visually from the player's 
    perspective. This image summary must be at the end of your response. It must be separate to the main description. Provide the image
    summary like this:

    [Image: ]

    Where the image summary is included within the square brackets [].

    Refer to the disaster relief guide of the specified region to inform options given to player. If not, use general disaster response guidelines.

    The user will respond with their chosen action. Based on their choice, generate the next step in the game in line with the story plot.

    Remember the user's actions and how it impacts the story. Generate the next step in the story based on their choice of action.
    `;
