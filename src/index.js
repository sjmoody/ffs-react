import React from 'react';
import ReactDOM from 'react-dom';
import IntentionList from './components/IntentionList.jsx'
import SuggestionItem from './components/SuggestionItem.jsx'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intentions: [],
      status: 'intentions',
      activeIntention: null,
      activeSuggestion: null

    }
    this.handleSelectIntention = this.handleSelectIntention.bind(this);
    this.setActiveIntention = this.setActiveIntention.bind(this);
    this.setActiveSuggestion = this.setActiveSuggestion.bind(this);
    this.handleNewSuggestion = this.handleNewSuggestion.bind(this);
    this.handleNewIntention = this.handleNewIntention.bind(this);
  }

  componentDidMount() {

    const data = [
      { "title": "To Give Someone a Bad Time version A",
      "suggestions": [
        "Ape (mock) their mannerisms",
        "Tell them they bore you",
        "Be nastily polite (sarcastic)",
        "Bone to pick...",
        "Borrow their money, their things",
        "Contradict them.",
        "Control them.",
        "Criticize their appearance, pets, relatives, sexual prowess, blemishes, use of English, etc.",
        "Embarrass them",
        "Exploit them",
        "Endow with stupidity, dullness, meanness, etc.",
        "Give advice",
        "Groan; grind teeth; snarl; scream",
        "Hit them",
        "Invade their space",
        "Interrupt them",
        "Make faces at them",
        "Mis-hear them",
        "Make them lose",
        "Patronize them",
        "Repeat bad remarks (stories) made about them",
        "Shout at them",
        "Start sentences with 'You always' or 'You never'",
        "Spill something on them",
        "Tell stories to their discredit",
        "Tie them up",
        "Torture them",
        "Talk only about yourself"
      ]
      },

      {"title": "To Give Someone a Bad Time version B",
      "suggestions": [
      "Be offensively blunt",
      "Be restless, tap fingers",
      "Break their things",
      "Change the subject",
      "Confuse them",
      "Contradict them",
      "Cross your legs away from them",
      "Damage or confiscate their possessions",
      "Disagree with them",
      "Frown; sigh; tut",
      "Give advice",
      "Glare at them",
      "Make irritated gestures",
      "Laugh at wrong time",
      "Kill their ideas",
      "Know what they're about to say",
      "Keep looking away",
      "Make them work",
      "Only be interested in yourself",
      "Out-stare them",
      "Misunderstand them",
      "Poke them with a finger",
      "Seduce them ineptly (e.g. start and give up)",
      "Slander them",
      "Talk to them through a third party",
      "Taunt",
      "Touch their head or face"
    ]
    },
    { "title": "To Be Thought  Beautiful",
      "suggestions": [
      "Be languid, sensual",
      "Check appearance (e.g. in mirror)",
      "Draw attention to your good points",
      "Glide about; dance",
      "Use your eyes expressively",
      "Smile a lot (flash teeth)",
      "Walk tall",
      "Worry about figure, skin, make-up, etc",
      "Ask their opinion of your attractiveness",
      "Be a model (or want to be a model)",
      "Exercise",
      "Fish for compliments",
      "Get bored when conversation turns away from you",
      "Have a best profile",
      "Have (or desire) a rich and/or glamorous lover",
      "Keep body open",
      "Look in mirror",
      "Make sensuous sounds",
      "Name drop",
      "One of your features is ugly",
      "Other people are ugly",
      "Panic when you find a zit",
      "Pose",
      "Show photos of yourself"
    ]},

    { "title": "To Show Someone They're Boring",
      "suggestions": [
      "Yawn",
      "Interrupt",
      "Change subject",
      "Complain they always say the same things",
      "Know what they're going to say",
      "Ignore them",
      "Beat head against the wall",
      "Ask them to leave",
      "Say, 'Do you ever listen to yourself?'",
      "Phone someone; read a book, magazine",
      "Tell stories about how boring they are",
      "Say, 'What?', 'Pardon me?'",
      "Stare at them or avoid looking at them",
      "Nod or agree too soon; i.e. you weren't really listening",
      "Look at watch"
    ]},

    {"title": "To Be Thought a Computer", "suggestions": [
      "Be efficient - everything in its right place",
      "Be cold and distant",
      "Be friendless and like it",
      "Be wooden",
      "Be insensitive to emotion (yours or other people's)",
      "Be insensitive to pain or pleasure",
      "Dislike physical contact",
      "Express your love (or hate) as if indifferent",
      "Use inexpressive inflexible voice",
      "No time for trivialities",
      "Other people are slow",
      "Other people are stupid",
      "Pause before answering, or snap out the answers",
      "Provide solutions",
      "Totally restrain an inner violence"
    ]},

    {"title": "To Flirt With Someone", "suggestions": [
      "Check for reactions, especially by raising eyebrows and opening eyes wide",
      "Emphasize points with hands more than usual",
      "Hold gaze longer than usual",
      "Face other person head on",
      "Find topics on which you can agree",
      "Keep mouth slightly open and look unconsciously at parts of other person",
      "Moisten your lips often",
      "Move closer than is normal",
      "Nod head in agreement, no matter what is being said",
      "Rest hand on some parts of others body",
      "Slight smile plus bashful look, lower eyes, look to the side, repeat",
      "Small touching movements"

    ]},

    {"title": "To Give Someone a Good Time version A", "suggestions": [
      "Ask questions about them and be interested in the answers",
      "Ask advice or their opinion",
      "Admire and praise their voice, their body, the way they fold a newspaper, etc.",
      "Compliment.",
      "Consider them first.",
      "Endow them with humor (laugh easily)",
      "Find them friends, sexual partners, etc.",
      "Get them to talk about themselves (give rapt attention)",
      "Give presents (flowers)",
      "Let them know that you enjoy their company",
      "Let them win",
      "Make them feel comfortable, important, at ease",
      "Offer food, drink, drugs, sex, money, etc.",
      "Quote them (admiringly)",
      "Respond promptly",
      "Share their sorrows, their problems",
      "Share a secret",
      "Tell nice stories about them",
      "Work for them (fix their car, do their laundry, etc.)"
    ]},

    {"title": "To Give Someone a Good Time version B", "suggestions": [
      "Agree",
      "Be modest (subservient)",
      "Be positive (enthusiastic)",
      "Be easy to control",
      "Be good natured",
      "Encourage (nod, make encouraging sounds, etc.",
      "Endow with humor",
      "Quote them (admiringly)",
      "Tell stories and jokes (if appropriate)",
      "Have a handicap and be good-natured about it",
      "Make their wish come true",
      "Praise their property, their behavior, their pets, etc.",
      "Shower with attention",
      "Stay happy when you fail (lose and be a good loser)",
      "Suggest a holiday, a trip, a picnice, a movie, etc.",
      "Support what they do or say",
      "Tell stories to their credit",
      "Touch, stroke, kiss and hug (if appropriate)",
      "What are their three wishes?"
    ]},

    {"title": "To Accept Guilt", "suggestions": [
      "Apologize.",
      "Break or ruin something.",
      "Confess, e.g. hit and run driver; you sat on a small pet; you were unjust; you stole something; left the bath dirty, etc.",
      "Avoid peoples eyes, hang head.",
      "Whatever you do, over-explain the reasons for it.",
      "Embarrass someone and feel terrible",
      "You forgot to close fridge, gate, air-lock, etc.",
      "Help people more than they need",
      "Be over-concerned",
      "You borrowed something and didn't return it",
      "Help people incompetently",
      "Often say, 'Is it all right?', 'Do you mind?', etc.",
      "Set objects or people on fire",
      "You lied about using contraception",
      "You told someone's secret",
      "You broke a religious rule"
    ]},

    {"title": "To Appear Happy and Contented with Everything", "suggestions": [
      "Behave as if you have a delightful secret",
      "Endow others with good intentions",
      "Endow others with humor",
      "Enjoy touching things, including yourself",
      "Have a pop tune inside your head",
      "Smile",
      "Laugh just from sheer pleasure",
      "Dance, sing",
      "Don't really listen",
      "Be confident",
      "Be playful",
      "Be very alive, healthy, awake",
      "Be positive",
      "Bodies are to give pleasure",
      "Have lots of time",
      "Indulge yourself (chocolates, drinks, etc.)",
      "Move, laugh, stretch from sheer pleasure",
      "Offer to help, but don't really care",
      "Pet an animal",
      "Repeat mantras silently (e.g. 'I love everything', 'I have everything I need'",
      "Stay happy when you fail",
      "Talk freely (give personal information)",
      "Take nothing seriously",
      "Tease playfully",
      "Wreck things but feel no guilt",
      "Use open, unguarded body positions",
      "Endow playfulness",
      "Be unselfconscious of your body"
    ]},

    {"title": "To Be Thought a Hero", "suggestions": [
      "Have a weapon",
      "Be on a quest",
      "Be attacked",
      "Detect dangers",
      "Display strength, athleticism",
      "Have firm, resonant voice",
      "Have an uninhibited laugh",
      "Keep head still when you speak (be high status)",
      "Smile a lot - flash teeth",
      "Give bold stares",
      "Kill something (someone)",
      "Rescue someone",
      "Talk about your thrilling adventures",
      "Start a fight",
      "Show scars",
      "Imagine a silver ball an inch inside your chest that radiates an amazing light",
      "Take risks eagerly",
      "Have a 'beloved'",
      "Guard and defend your honor",
      "Detect an enemy",
      "Issue dares",
      "Be relatively unaffected by pain",
      "People are safe when you're around",
      "Show trophies, medals",
      "Swagger"
    ]},

    {"title": "To Humiliate Someone", "suggestions": [
      "Blame them",
      "Make unflattering comparisons",
      "Tell bad stories about them",
      "Ridicule them to other people (to the audience?)",
      "Stare with contempt",
      "Make them undress, sing, attempt impossible feats",
      "Yawn",
      "Insult them",
      "'Over-cheer' them",
      "Accuse them of lying, of stealing, of coming on to you",
      "Make snide remarks",
      "Be better than them: more intelligent, sexier, etc.",
      "Yawn - they bore you",
      "Tell jokes they don't get",
      "Lead them on and reject them",
      "Laugh at wrong time",
      "Scorn them",
      "Expose their shameful secrets",
      "Dare them to make moves on you"
    ]},

    {"title": "To Impress Someone", "suggestions": [
      "Be a neurosurgeon, rock star, author, witch, murderer, athlete, etc.",
      "Talk about your achievements",
      "Demonstrate skills: yodelling? knife throwing? hypnosis?",
      "Detect errors",
      "Name drop",
      "Solve problems",
      "Know secrets",
      "Have a famous lover",
      "Show awards",
      "Be recipient of presents, awards, etc.",
      "Be amazingly lucky",
      "Receive a flattering phone call",
      "Be a sexual athlete",
      "Do magic tricks",
      "Be rich",
      "Someone is interviewing you; photographing you",
      "A tailor is measuring you",
      "Reprimand a servant",
      "Have incredibly obedient dog",
      "Animals love you"
    ]},


    {"title": "To Be Thought Intelligent", "suggestions": [
      "Correct people",
      "Know everything",
      "Explain baffling things",
      "Use complex sentences",
      "Use long words",
      "Other people are stupid/wrong",
      "Quote statistics (invent them)",
      "'As Aristotle says...'",
      "Use foreign phrases (gibberish?)",
      "Interrupt",
      "Make thoughtful sounds, 'umms' and 'ahhhs'",
      "Whistle Bach",
      "Adopt serious attitudes",
      "Analyze everything",
      "Argue",
      "Be a writer, professor, doctor, etc.",
      "Carry a calculator or book",
      "Cite authorities",
      "Criticize",
      "Give abstruse information",
      "Lecture",
      "Make notes",
      "Name drop",
      "Define terms",
      "Steer conversation",
      "Stress your own brilliance",
      "Start sentences with 'In my opinion...' or 'As I say...', or 'It all depends what you mean by...' or 'In this society...'",
      "Talk about obscure books, artists, films, etc.",
      "Don't listen",
      "Other people are stupid"
    ]},

    {"title": "To Be Thought a Jerk", "suggestions": [
      "Be tactless - refer to broken love affairs, drag up old bones",
      "Bad manners",
      "Brag",
      "Be a bigot",
      "Have chip on your shoulder",
      "Interrupt (change subject?)",
      "Point out people's defects. Tell them how repulsive, smelly, stupid, arrogant, boring, ugly, etc. they are",
      "Force friendliness (pester people)",
      "Tease and irritate people",
      "Bully others to join in stupid or unwise activities",
      "Drag everything back to sex and/or excretion",
      "Get people's interest and then lose your train of thought",
      "Make pointless jokes",
      "Offensive laugh",
      "Hit people",
      "Make a mess - be clumsy, spill stuff",
      "Invade people's space",
      "Make obvious passes",
      "Never take 'no' for an answer",
      "Pass blame on to other people",
      "Sing, whistle, hum (irritatingly)",
      "Throw tantrums",
      "Whine when you can't get your own way"
    ]},
    {"title": "To Be Judgmental", "suggestions": [
      "Accuse people",
      "Correct people",
      "Be (or try to be) higher status than others are",
      "Be moralistic",
      "Be shocked",
      "Blame people",
      "Bossy or condescending tone of voice",
      "Censor behavior, ideas",
      "Criticize",
      "Detect wrong-doers",
      "Exaggerate",
      "Endow bad qualities - dishonesty, treachery, perversions, etc.",
      "Feel threatened",
      "Impute unworthy motives",
      "Interrogate people",
      "Offer self as a model",
      "Punish people",
      "'Tut' - make disapproving sounds",
      "Use 'we' instead of I",
      "Watch people suspiciously"
    ]},

    {"title": "To be the Life and Soul of the Party", "suggestions": [
      "Admire people and objects",
      "Agree - give total approval",
      "Be positive",
      "Be flamboyant",
      "Be generous",
      "Be loud",
      "Be sexy",
      "Be happy",
      "Encourage others to break rules",
      "Know fascinating gossip",
      "Remember names (and use them)",
      "Suggest games, dancing, sing-alongs, etc.",
      "Be fit and healthy and very relaxed",
      "Break taboos",
      "Clown",
      "Compliment/flatter",
      "Do tricks",
      "Draw others out",
      "Dress up in other people's clothes",
      "Suggest strip poker",
      "Get people drunk, stoned",
      "Flatter",
      "Introduce people",
      "Laugh easily and a lot",
      "Invade personal space, playfully",
      "Make big entrances",
      "Matchmake",
      "Match status to partner's",
      "Often open the eyes wide",
      "Offer food, drink, sex, drugs, etc.",
      "Plan nice events, experiences, picnics, etc.",
      "Pretend that people are higher or lower status for fun",
      "Play (invent?) musical instruments",
      "Put on music",
      "Reassure people",
      "Sing, strip, get others to perform",
      "Tell amusing stories",
      "Tease",
      "Tell jokes (get others to tell jokes)",
      "Tickle",
      "Touch people",
      "Use lots of space"

    ]},
    {"title": "To be Thought Mysterious", "suggestions": [
      "Be secretive",
      "Drop hints",
      "Receive strange presents, phone calls, etc.",
      "Be a psychic (know things in advance)",
      "Laugh at private thoughts",
      "Know secrets about other people",
      "Have a weapon, a skeleton key, or an enemy",
      "Have immense wealth; bodyguards",
      "Give meaningful looks",
      "Significant pauses",
      "Secret smile",
      "Be going on a journey for no reason",
      "Be going to a laboratory, to NASA, to Tierra del Fuego, to prison - for no apparent reason",
      "Enter a trance",
      "Be 'possessed'",
      "Sudden swings of mood",
      "Suffer an attack of some kind, and try to hide it",
      "Expect attack (have an enemy)",
      "Move languidly or look haunted",
      "Make inexplicable request",
      "Have no means of support",
      "Laugh at private thoughts",
      "Know things about the other person that you have no reason to know"
    ]},
    {"title": "To be Thought a Teenage Nerd", "suggestions": [
      "Be enthusiastic",
      "Be good natured",
      "Be positive",
      "Be tactless",
      "Be clumsy: spill things, trip up, etc.",
      "Talk about Mom or Dad: give their opinion on things",
      "Tell stupid jokes",
      "Laugh at stupid jokes",
      "Have an odd laugh",
      "Quick jerky movements",
      "Stupid arm movements",
      "Think you're really 'cool'",
      "Try to make friends with everybody",
      "Talk about schoolwork, grades",
      "Talk about chess, Dungeons and Dragons, bird watching, etc.",
      "Clean your glasses (keep pushing them up on nose)",
      "Often put hand to mouth, to head, etc.",
      "Collect useless things",
      "Writhe with embarrassment",
      "Try to make friends with everybody"
    ]},

    {"title": "To be Thought Normal", "suggestions": [
      "Agree with caution",
      "Ask dull questions",
      "Be a churchgoer",
      "Be conservative",
      "Check appearance, opinions",
      "Be concerned about the time",
      "Dislike bodily contact",
      "Don't swear unless other people do - and then swear self-consciously",
      "Don't take up much space - unless trying to imitate others",
      "Discuss dull things that you find interesting (TV, weather, family, church, garden, possessions, etc.)",
      "Seek reassurance",
      "Find others strange",
      "Be formal",
      "Have a dog",
      "Have a slight smile, or a slight frown",
      "Have moderate and/or nervous voice",
      "Join in with caution",
      "Keep others at a polite distance (if possible)",
      "Laugh in moderation",
      "Listen to the most boring person",
      "Sit symmetrically",
      "Show family pictures",
      "Small concealed fidgeting",
      "Speak in cliches",
      "Try not to make the first move",
      "Panic momentarily and instantly recover",
      "Use conventional postures in sequence"
    ]},
    {"title": "To be Parental (a Bad Parent)", "suggestions": [
      "Accusation of unfeelingness",
      "Ask people to do stuff and then do it yourself",
      "Adjust people's appearance",
      "Be a martyr",
      "Be disgusted",
      "Be moralistic",
      "Be selfless",
      "Be shrill",
      "Be protective ('you'll get raped')",
      "Bossy or sneery tone of voice",
      "Correct people",
      "Confiscate their things",
      "Create obstacles",
      "Criticize people's appearance, morals, personal habits, friends, etc.",
      "Things must be done your way",
      "Detect misbehavior",
      "Dominate",
      "Don't listen",
      "Eat leftover food",
      "Endow with stupidity",
      "Enunciate clearly",
      "Give advice (stupid, wrong advice?)",
      "Give information they already have",
      "Gossip",
      "Hand out blame",
      "Hit people",
      "Hold up others (siblings? schoolmates?) as examples",
      "Humiliate someone publicly",
      "Instil guilt",
      "Insist on being kissed respectfully",
      "Impose goals",
      "Tell people things they already know",
      "Lay down 'laws'; set limits",
      "Only you know the right way to do things",
      "Make disapproving faces",
      "Make snide remarks (comment to yourself about people)",
      "Mock them - use sarcasm",
      "Nag",
      "Nothing they do satisfies you",
      "People are wasting their intelligence, are disobedient",
      "Scold",
      "Object to people's friends, lovers, pets, laziness, etc.",
      "Often say 'Of course.'",
      "Pick bones",
      "Pry",
      "Start sentences with 'You always' or 'You never'",
      "Talk to people through third-party",
      "Try to catch people out - set traps",
      "Things must be done your way",
      "'When I was young'-type hardships",
      "Use full names"
    ]},
    {"title": "To Seduce a Man Version A", "suggestions": [
      "Ask him to dance",
      "Admire his taste",
      "Be breathless",
      "Be close to him",
      "Be suggestive",
      "Be vulnerable",
      "Caress yourself",
      "Laugh easily - laugh at his jokes",
      "Let him know he's special",
      "Let him know you're available",
      "Have mantra 'Take me!'",
      "Give alcohol, food, drugs",
      "Eat seductively",
      "Have low, soft, husky voice",
      "Hold eye contact",
      "Moan, sigh",
      "Moisten lips",
      "Move sensually, pose",
      "Play with your hair (or his hair)",
      "Rub up against him",
      "Say yes a lot",
      "Sensual sounds",
      "Sit close to him with legs tucked away from him",
      "Touch him when speaking",
      "Rapt attention",
      "Undulate subtly"
    ]},
    {"title": "To Seduce a Man Version B", "suggestions": [
      "Be close to him",
      "Be mysterious",
      "Be vulnerable",
      "Boost his ego",
      "Caress objects as if they were part of him",
      "Compliment him",
      "Candlelit dinner",
      "Exude happiness",
      "Give personal information",
      "Loosen clothing - expose neck",
      "Love cute animals; children",
      "Look into his eyes",
      "Raise arms to emphasize breasts",
      "Rest your head on his shoulder",
      "Run your foot up and down his leg",
      "Breathe on him (blow air through the surface of his clothes)",
      "Sexual innuendos - hints",
      "Share secrets",
      "Show him something in the bedroom",
      "Take your shoes off",
      "Touch him when speaking",
      "Massage",
      "Tease",
      "Whisper close to his ear",
      "You don't need a commitment"
    ]},
    {"title": "To Seduce a Woman Version A", "suggestions": [
      "Be boyish, playful",
      "Be close to her",
      "Be worried you might be gay",
      "Be 'lonely'",
      "Be polite, chivalrous",
      "Be self-revealing",
      "Beg, plead, weep, grovel",
      "Compliment",
      "Discuss possibility of commitment",
      "Give complete attention",
      "Have a flaw - gay, impotent, war wound, etc.",
      "Be ticklish",
      "Have mantra - 'I love you'",
      "Hold eye contact",
      "Jump on her and then apologize",
      "Love cute, furry animals and children",
      "Make her laugh",
      "Offer hugs",
      "Play with her hair",
      "Remove speck of dirt from her eye",
      "Synchronize your breathing with hers",
      "Soft tones in voice",
      "'Say that again...'",
      "Touch her breasts (accidentally)",
      "Tell her you're a virgin",
      "Tell her you love her",
      "Touch her face, etc."
    ]},
    {"title": "To Seduce a Woman Version B", "suggestions": [
      "Be a hero",
      "Be masterful",
      "Be macho yet sensitive",
      "Be firm and confident",
      "Be high status (natural leader)",
      "Be athletic (demonstrate strength, physical ability)",
      "Control her",
      "Do whatever you can get away with",
      "Exhibit strength of character",
      "Get her drunk",
      "Give brutal advice",
      "Have possessions, homes, cars, airplanes, other women, etc.",
      "Have insanely obedient dog",
      "Apologize for being roused",
      "Blame her because you're roused",
      "Have mantra - 'I hate you'",
      "Increase physical contact",
      "It's her fault you love her, want her.",
      "Lock door.",
      "Keep head still when you speak",
      "Touch her hair, head, face, etc.",
      "You know how her mind works - what she wants",
      "Offer money, threaten, blackmail",
      "Persist, be inexorable",
      "Physically overpower her",
      "Reprimand her",
      "Rub against furniture, moan",
      "Show pornographic books, videos, etc.",
      "Sexy voice - smoulder",
      "Stroke her",
      "Tell her you love her",
      "Tell her she smells good",
      "Take all the responsibility",
      "You're a fighter - you've killed someone",
      "Undress"
    ]},

    {"title": "To be High Status", "suggestions": [
      "Take control (or fight for control)",
      "Alternate between saying things to raise yourself and saying things to lower the other person",
      "Be more relaxed and stiller than your partner",
      "Crush any 'challenges'",
      "Delay before reacting",
      "Hold eye contact at least five seconds (never quickly glance back)",
      "Keep head motionless when you speak each phrase",
      "Blink less than other people",
      "Suppress blinking during confontations",
      "Move smoothly - often be still",
      "Sometimes use long 'errr' sound before speaking",
      "Take lots of space",
      "Be very relaxed unless challenged",
      "Have lots of breath before you speak",
      "Touch other people's faces, ruffle their hair, pat their heads",
      "Talk in complete sentences",
      "Often use people's names"
    ]},
    {"title": "To be Low Status (positive)", "suggestions": [
      "Admire other people's possessions, poise, etc. but secretly or hesitatingly",
      "Answer promptly",
      "Bite lower lip with teeth when smiling.",
      "Blink more than your partner.",
      "Be wide-eyed",
      "Have no job, car, lover, sexual technique, but it doesn't worry you",
      "Be breathless when speaking",
      "Break eye contact but keep peeping back, hoping that your partner will look away so that you can look at their eyes",
      "Cheerfully tell stories that lower your status or that attempt to raise it and fail",
      "Disparage yourself, cheerfully, and raise your partner",
      "Do double-takes",
      "Have a hesitant (short of breath) laugh",
      "Have a stupid laugh",
      "Hands in lap fumble nervously",
      "Imitate your partner surreptitiously",
      "Laugh while moving head forward (but keep it level or raise the chin so the nape of your neck shortens)",
      "Let others control the scene",
      "Make nervous movements; twitch",
      "Often touch your face (head)",
      "Swivel toes toward each other until they touch (heels out)",
      "Sit low - look up to people",
      "Add a very short 'er' before you speak",
      "Take less space than your partner (but don't lean forward)",
      "Wiggle your bottom on the seat (more characteristic of women)",
      "Wave to someone with your elbow held tight against your ribs"
    ]},
    {"title": "To Get Sympathy", "suggestions": [
      "Sigh",
      "Have a brave smile",
      "Be clumsy",
      "Weep",
      "Be embarrassed",
      "Be unemployed",
      "Try to help but be inadequate",
      "Cover face and 'weep'",
      "Hurt yourself (spill something on self)",
      "Admire others",
      "Have a handicap",
      "Have a terrible boss, child, sibling, mate, guru",
      "Punish yourself when you fail",
      "Tell sob story",
      "Have a speech defect, lisp",
      "Be bad at sex",
      "Be lonely",
      "Have no lover",
      "Get nasty phone call, letter, etc.",
      "You've been fired",
      "See yourself as a victim",
      "No one likes you",
      "Be at a loss",
      "Someone thrashed you",
      "Your pet avoids you",
      "Temporarily homeless",
      "Admire (envy) others",
      "Be destitute"
    ]}
    ]
    this.setState({intentions: data})
  }


  setActiveIntention(intention){
    this.setState({
      status: 'suggestion',
      activeIntention: intention
    });
  }

  setActiveSuggestion(suggestion){
    this.setState({
      activeSuggestion: suggestion
    })


  }
  handleNewSuggestion(){
    let intention = this.state.activeIntention;
    let selected = this.state.intentions.find(i => i.title === intention)
    if(selected){
      let randomNum = Math.floor(Math.random() * selected.suggestions.length)
      let randomSuggestion = selected.suggestions[randomNum];
      this.setActiveSuggestion(randomSuggestion);
    }


  }
  handleNewIntention(){
    this.setState({
      status: 'intentions',
      activeIntention: null,
      activeSuggestion: null
    })
  }

  handleSelectIntention(intention){
    let selected = this.state.intentions.find(i => i.title === intention)
    if(selected){
      let randomNum = Math.floor(Math.random() * selected.suggestions.length)
      let randomSuggestion = selected.suggestions[randomNum];
      this.setActiveSuggestion(randomSuggestion);
      this.setActiveIntention(intention);

    }
  }




  render () {
    let intentions = this.state.intentions;
    let status = this.state.status;
    let activeIntention = this.state.activeIntention;
    let activeSuggestion = this.state.activeSuggestion;
    if (status === 'intentions'){
      return (
        <div>
          <Container>
          <h1 >Fast Food Stanislavski</h1>
          <p style={{fontStyle: 'italic'}}>A lightweight app to improve your acting. </p>

            <Container>
              <h4>Choose your Intention</h4>

          <IntentionList onClick={this.handleSelectIntention} intentions={intentions}/>

          </Container>
          <Container style={{fontStyle: 'italic', textAlign: 'right'}}>
            Inspired by <a href="https://www.keithjohnstone.com/blog">Keith Johnstone</a>. Made with <FontAwesomeIcon style={{color:'red'}}icon={faHeart} /> by <a href="https://twitter.com/sjmoody">@sjmoody</a>

          </Container>
          </Container>
        </div>
      )
    } else {
      return (
        <div>
          <Card>
          <Card.Header>{activeIntention}</Card.Header>
            <Card.Body>
            <Card.Text><SuggestionItem suggestion={activeSuggestion}/></Card.Text>
            </Card.Body>
            <Card.Body>
            <Stack direction="horizontal" gap={3}>
          <Button  variant="outline-secondary " onClick={this.handleNewIntention}>&lt;&lt; New Intention</Button>
          <Button variant="outline-success" onClick={this.handleNewSuggestion}>New Suggestion</Button>
          </Stack>
          </Card.Body>
        </Card>


        </div>
      )
    }

  };
}

ReactDOM.render(<App />, document.getElementById('root'));

