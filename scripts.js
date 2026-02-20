const videoWrapper = document.getElementById("focus-video");
const heroVideo = videoWrapper?.querySelector("video");
const playButton = videoWrapper?.querySelector(".video-play");

if (heroVideo && playButton) {
  const togglePlay = () => {
    if (heroVideo.paused) {
      heroVideo.play();
      videoWrapper.classList.add("playing");
    } else {
      heroVideo.pause();
      videoWrapper.classList.remove("playing");
    }
  };

  playButton.addEventListener("click", togglePlay);
  heroVideo.addEventListener("pause", () =>
    videoWrapper.classList.remove("playing"),
  );
  heroVideo.addEventListener("ended", () =>
    videoWrapper.classList.remove("playing"),
  );
  heroVideo.addEventListener("play", () =>
    videoWrapper.classList.add("playing"),
  );

  // Click on video to pause
  heroVideo.addEventListener("click", () => {
    if (!heroVideo.paused) {
      heroVideo.pause();
    }
  });
}

document.querySelectorAll(".faq-item").forEach((item) => {
  const toggle = item.querySelector(".faq-plus");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const testimonialCard = document.querySelector(".testimonial-card");
const testimonialVideo = document.querySelector(".testimonial-video");
const testimonialPlay = testimonialCard?.querySelector(".video-play");
const testimonialDots = Array.from(
  document.querySelectorAll(".testimonial-dot"),
);
const testimonialArrows = document.querySelectorAll(".testimonial-arrow");

if (testimonialCard && testimonialVideo && testimonialDots.length) {
  const testimonialSources = [
    "assets/videos/Alcina Almeida.mp4",
    "assets/videos/Cristina Cunha.mp4",
    "assets/videos/Katia Faria.mp4",
    "assets/videos/Olesea Moraru.mp4",
    "assets/videos/Paula Cordeiro Duarte.mp4",
    "assets/videos/Tina Fortes.mp4",
  ];
  let testimonialIndex = 0;

  const setTestimonial = (index) => {
    testimonialIndex = (index + testimonialSources.length) % testimonialSources.length;
    testimonialVideo.pause();
    testimonialVideo.currentTime = 0;
    testimonialVideo.src = encodeURI(testimonialSources[testimonialIndex]);
    testimonialVideo.load();
    testimonialCard.classList.remove("playing");
    testimonialDots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === testimonialIndex);
    });
  };

  testimonialArrows.forEach((arrow, arrowIndex) => {
    arrow.addEventListener("click", () => {
      const direction = arrowIndex === 0 ? -1 : 1;
      setTestimonial(testimonialIndex + direction);
    });
  });

  testimonialDots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => setTestimonial(dotIndex));
  });

  if (testimonialPlay) {
    const togglePlay = () => {
      if (testimonialVideo.paused) {
        testimonialVideo.play();
        testimonialCard.classList.add("playing");
      } else {
        testimonialVideo.pause();
        testimonialCard.classList.remove("playing");
      }
    };

    testimonialPlay.addEventListener("click", togglePlay);
    testimonialVideo.addEventListener("click", () => {
      if (!testimonialVideo.paused) {
        testimonialVideo.pause();
        testimonialCard.classList.remove("playing");
      }
    });
  }

  testimonialVideo.addEventListener("pause", () => {
    testimonialCard.classList.remove("playing");
  });

  testimonialVideo.addEventListener("ended", () => {
    testimonialCard.classList.remove("playing");
  });

  setTestimonial(0);
}
