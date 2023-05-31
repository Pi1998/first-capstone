const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navMobile.classList.toggle('active');

  // Disable scrolling when the menu is active
  body.classList.toggle('disable-scroll');
}
function closeMenu() {
  hamburger.classList.remove('active');
  navMobile.classList.remove('active');
  body.classList.remove('disable-scroll');
}

hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-link').forEach((n) => {
  n.addEventListener('click', () => {
    closeMenu();
  });
});

const speakers = [
    {
        name: 'Rafeh Qazi',
        position: 'Founder of Clever Programmer coding bootcamp',
        info: 'Clever Programmer is a community with thousands of students who are learning to code by building real world projects.',
        speaker_img: 'speakers/Qazi.jpg',
        alt: 'Photo of Quzi',
        status: '',
    },
    {
        name: 'Yan Min Thwin',
        position: 'CEO of Techscape@3AM',
        info: 'Yan Min Thwin established the startup in 2017 with his fellows. Sharing technological information to people with blogs, vlogs and conferences',
        speaker_img: 'speakers/Yang.jpg',
        alt: 'Photo of Yan',
        status: '',
    },
    {
        name: 'Yin Htet Htet Aung',
        position: 'Digital Artist and Social Media Influencer',
        info: 'Yin Htet created seamlessly blend innovative digital techniques with her artistic prowess, resulting in mesmerizing visual experiences.',
        speaker_img: 'speakers/Yin.jpg',
        alt: 'Photo of Yin Htet',
        status: 'hidden',
    },
    {
        name: 'May Phoo Pyae',
        position: 'Senior Architect and Designer at IBI Group',
        info: 'With years of experience in the field, May Phoo Pyae has successfully designed and managed a wide range of architectural projects, including residential complexes, commercial spaces, and public structures.',
        speaker_img: 'speakers/May.jpg',
        alt: 'Photo of May Phoo',
        status: 'hidden',
    },
    {
        name: 'Shinn Thant Swam Ye',
        position: 'Web designer of Techscape@3AM',
        info: 'Shinn Thant is a passionate web designer with a great sense of style, sharing his perspectives with minimalistic designs and perfectionalism.',
        speaker_img: 'speakers/Shinn.jpg',
        alt: 'Photo of Shinn Thant',
        status: 'hidden',
    },
    {
        name: 'Mosh Hamedani',
        position: 'Senior Software Developer and Teacher',
        info: 'Mosh had taught over 200,000 students in 192 countries and his YouTube channel has 5.7 million views.',
        speaker_img: 'speakers/Mosh.webp',
        alt: 'Photo of Mosh',
        status: 'hidden',
    },
];

const card = (speaker) => `
    <div class="speaker-container ${speaker.status}">
        <div class="speaker-img">
            <img src="${speaker.speaker_img}" alt="${speaker.alt}">
        </div>
        <div class="speaker-info">
            <div class="speaker-name">${speaker.name}</div>
            <div class="speaker-position">${speaker.position}</div>
            <div class="guide-bar2"></div>
            <div class="speaker-info">${speaker.info}</div>
        </div>
    </div>
`;

const speakerDiv = document.getElementById('speakers');
const speakerGrid = speakers.map((speaker) => card(speaker)).join('');
speakerDiv.innerHTML = speakerGrid;

// ************************* Show more/less button ************************* //
const speakerLine = document.getElementsByClassName('speaker-container');
const speakerArray = Array.from(speakerLine);

// lading on a desktop to show all speakers
if (window.innerWidth > 767) {
  speakerArray.forEach((speaker) => {
    if (speaker.classList.contains('hidden')) {
      speaker.classList.remove('hidden');
    }
  });
}

// Using JS media-querry to sscreen size breakpoint changes
const trigger = matchMedia('(min-width: 768px)');
trigger.addEventListener('change', ({ matches }) => {
  // If screen changs to desktop, show all speakers
  if (matches === true) {
    speakerArray.forEach((speaker) => {
      if (speaker.classList.contains('hidden')) {
        speaker.classList.remove('hidden');
      }
    });
  } else {
    // if screen changes to mobile, show only forst two speakers by default
    speakerArray.forEach((speaker, index) => {
      if (index > 1) {
        speaker.classList.add('hidden');
      }
    });
  }
});

// Event listener for the button to show or hide speakers in mobile view

const seeMoreBtn = document.getElementById('see-more-btn');
let expanded = seeMoreBtn.getAttribute('expanded');
seeMoreBtn.addEventListener('click', () => {
  if (expanded === 'false') {
    speakerArray.forEach((speaker) => {
      if (speaker.classList.contains('hidden')) {
        speaker.classList.remove('hidden');
      }
    });
    seeMoreBtn.innerHTML = 'Show Less <img src="icons/arrow_up.png" alt="Arrow up image">';
    expanded = 'true';
    seeMoreBtn.setAttribute('expanded', expanded);
  } else {
    speakerArray.forEach((speaker, index) => {
      if (index > 1) {
        speaker.classList.add('hidden');
      }
    });
    seeMoreBtn.innerHTML = 'Show More <img src="icons/arrow_down.png" alt="Arrow down image">';
    expanded = 'false';
    seeMoreBtn.setAttribute('expanded', expanded);
  }
});
