/* =============================
   1. Gold Dust Particles
============================= */
;(function () {
  const layer = document.getElementById("dust-layer");
  if (!layer) return;

  for (let i = 0; i < 32; i++) {
    const p = document.createElement("div");
    p.className = "dust-p";
    const size = 2 + Math.random() * 3.5;
    p.style.left = Math.random() * 100 + "%";
    p.style.bottom = Math.random() * 55 + "%";
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.setProperty("--d", 7 + Math.random() * 9 + "s");
    p.style.setProperty("--dl", -Math.random() * 12 + "s");
    layer.appendChild(p);
  }
})();

/* =============================
   2. Falling Cherry Petals (Anime Drift)
============================= */
;(function () {
  const layer = document.getElementById("petals-layer");
  if (!layer) return;

  for (let i = 0; i < 25; i++) {
    const p = document.createElement("div");
    p.className = "petal";
    
    // Randomize size and initial position
    const size = 8 + Math.random() * 12;
    p.style.left = Math.random() * 100 + "%";
    p.style.top = "-5%";
    p.style.width = size + "px";
    p.style.height = (size * 0.7) + "px";

    // Randomize animation duration and delay
    const duration = 7 + Math.random() * 10;
    const delay = -Math.random() * 15;
    const swayDuration = 2 + Math.random() * 4;

    p.style.animation = `
      petalFall ${duration}s linear ${delay}s infinite,
      petalSway ${swayDuration}s ease-in-out ${delay}s infinite alternate
    `;

    layer.appendChild(p);
  }
})();

/* =============================
   3. Rain Spark Particles
============================= */
;(function () {
  const container = document.getElementById("rain-sparks");
  if (!container) return;

  for (let i = 0; i < 22; i++) {
    const spark = document.createElement("div");
    const size = 2 + Math.random() * 3;
    spark.style.position = "absolute";
    spark.style.left = Math.random() * 100 + "%";
    spark.style.top = Math.random() * 100 + "%";
    spark.style.width = size + "px";
    spark.style.height = size + "px";
    spark.style.background = "rgba(180,215,255,.75)";
    spark.style.borderRadius = "50%";
    spark.style.animation = `sparkPop ${1.4 + Math.random() * 2}s ease-in-out -${Math.random() * 4}s infinite`;
    container.appendChild(spark);
  }
})();

/* =============================
   4. Blossom Panel Petals
============================= */
;(function () {
  const container = document.getElementById("bpetals");
  if (!container) return;

  for (let i = 0; i < 16; i++) {
    const petal = document.createElement("div");
    const size = 5 + Math.random() * 8;
    petal.style.position = "absolute";
    petal.style.left = Math.random() * 100 + "%";
    petal.style.top = Math.random() * 80 + "%";
    petal.style.width = size + "px";
    petal.style.height = size * 0.68 + "px";
    petal.style.background = "radial-gradient(ellipse at 40% 35%, rgba(220,100,145,.9), rgba(195,70,120,.6))";
    petal.style.borderRadius = "50% 0 50% 0";
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    petal.style.animation = `bpetalDrift ${3 + Math.random() * 4}s ease-in-out -${Math.random() * 7}s infinite`;
    petal.style.opacity = "0";
    container.appendChild(petal);
  }
})();