const MasterbitSection = () => {
  return (
    <section>
      <div id="section3">
        <h2 className="heading">Masterbeat</h2>
        <div>
          <video
            width="500"
            height="auto"
            autoPlay
            loop
            muted
            className="radius"
          >
            <source src="./images/video.mp4" type="video/mp4" />
          </video>
          <div className="content">
            <p>
              Crafted for the modern audiophile, Audira headphones deliver sound
              so rich, it pulses through your senses. From crisp highs to deep,
              rolling bass—you don’t just hear it, you feel it.
            </p>
            <p>
              Whether you're in focus mode or free flow, the precision-tuned
              audio adapts to your pace. With Masterbeat, music becomes your
              personal soundtrack—bold, immersive, unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterbitSection;
