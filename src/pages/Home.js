const Home = () => {
  return (
    <div className="homeWrapper">
      <img
        className="bannerImg"
        src="https://i.giphy.com/8xUpOuaJL61KEIA55f.webp"
      ></img>

      <div className="welcomeWrapper">
        <p className="title">Welcome to our Blood shop!</p>
        <p>Here you can find all types of blood at very accessible prices</p>
      </div>

      <div className="bloodTypesWrapper">
        <p className="description">
          New to drinking blood? Check out our summary about each blood type
          below.
        </p>
        <div className="bloodType">
          <img src="https://i.giphy.com/tb8vxqwKY4KyKBHOPg.webp"></img>
          <div>
            <p className="title">BLOOD TYPE A – The Delicate Vintage</p>
            <p>
              Refined, reserved, and oh-so-smooth. Type A blood is like a fine
              aged wine — balanced, subtle, and best enjoyed slowly. Ideal for
              vampires who appreciate discipline and devotion in every drop.
              Pairs well with moonlit sonatas and quiet contemplation.
            </p>
          </div>
        </div>

        <div className="bloodType">
          <img src="https://i.giphy.com/A4IvKFhXBKM7ZSmRSx.webp"></img>
          <div>
            <p className="title">BLOOD TYPE B – The Wild Blend</p>
            <p>
              Bold and full of character, Type B blood is the rebellious choice
              for thrill-seeking vampires. Bursting with creativity and
              independence, it’s unpredictable but always memorable. Sip when
              you’re ready to dance with chaos.
            </p>
          </div>
        </div>

        <div className="bloodType">
          <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTM3Y291eW55dmp1cXd0ejN3N2NhanpuN2V0OXQ4c2pnam85eXhyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XEq1OBIP00TXGYzoxe/giphy.gif"></img>
          <div>
            <p className="title">BLOOD TYPE O – The Classic Crimson</p>
            <p>
              Confident, charismatic, and universally loved — Type O blood is
              the timeless favorite of the undead elite. Full-bodied and
              energetic, it’s a bold pour with a dependable punch. Perfect for
              power-hungry vampires with leadership in their veins.
            </p>
          </div>
        </div>

        <div className="bloodType">
          <img src="https://i.giphy.com/gaWLsQWFYNuUGGTaXS.webp"></img>
          <div>
            <p className="title">BLOOD TYPE AB – The Rare Reserve</p>
            <p>
              Mysterious, elusive, and deeply layered — AB blood is the rarest
              vintage in our cellar. A perfect fusion of passion and logic,
              ideal for vampires with a taste for enigma and elegance. Best
              served cold... with a twist of paradox.
            </p>
          </div>
        </div>
      </div>


      <div className="aboutCompany">
        <div>
          <img src="https://freight.cargo.site/w/800/h/800/q/75/i/Q1705464358092062748521079544106/wine_swirl_v8_more_spill_100x1000.gif"></img>
          Worldwide shipping
        </div>
        <div>
          <img src="https://freight.cargo.site/w/800/h/800/q/75/i/Q1705464358092062748521079544106/wine_swirl_v8_more_spill_100x1000.gif"></img>
          Discreet packaging
        </div>
        <div>
          <img src="https://freight.cargo.site/w/800/h/800/q/75/i/Q1705464358092062748521079544106/wine_swirl_v8_more_spill_100x1000.gif"></img>
         Monday to Friday
        </div>
        <div>
          <img src="https://freight.cargo.site/w/800/h/800/q/75/i/Q1705464358092062748521079544106/wine_swirl_v8_more_spill_100x1000.gif"></img>
        9:00PM to 6AM
        </div>
      </div>

          <div className="contactUs">
        <p className="title">
            Contact us to make a purchase!*
        </p>
        <p className="phone">
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXd3OXEydGI4bGJieWtkang3MGZmeDEya2FubXBsMHJyMndiZzlpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lIC8sATLdur9pvyR8k/giphy.gif"></img>
            Phone: 0799111111
             <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXd3OXEydGI4bGJieWtkang3MGZmeDEya2FubXBsMHJyMndiZzlpaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lIC8sATLdur9pvyR8k/giphy.gif"></img>

            </p>
          
        
        <p>or fill out this form and we will contact you:</p>

            <form action="/submit" method="POST">
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" required /><br /><br />

            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />

            <button type="submit">Submit</button>
            </form>

    <p className="small">*for discretion purposes, orders can be taken only by phone or other one-time means of communication. Thank you for your understanding.</p>
    
    </div>

      <div className="bloodAdvice">
        <p>
          <img src="https://media.tenor.com/WAWMm1S7Ss0AAAAj/fire-fireball.gif"></img>
          Blood drinking tips and tricks for our lovely vampires out there
        </p>
        <ul>
          <li>
            Blood is <span>life</span> — and nothing compares to drinking it
            warm, straight from the vein. Once exposed to air, blood begins to{" "}
            <span>coagulate</span> and lose its energy. You can survive on
            stored blood in emergencies (especially if you chill it properly),
            but it’s like sipping cold soup: sad, flavorless, and barely
            sustaining. Fresh blood carries the heat, emotion, and vitality of
            the donor — and for a vampire, that’s where the true nourishment
            lies.
          </li>

          <li>
            This isn’t the <span>Dark Ages</span>. These nights, vampires thrive
            by <span>blending in</span>, not tearing throats open in alleyways.
            Getting consent — even if it's through charm, seduction, or mutual
            arrangement — keeps the peace. It also avoids messy consequences
            like panicked humans, viral videos, or vampire hunters sniffing
            around. In some covens, unauthorized feeding is punishable by
            exile... or worse.
          </li>

          <li>
            Sure, arteries carry more blood, but they <span>spray</span>, they
            pulse hard, and they make a damn mess. Veins are calmer, easier to
            access, and less likely to betray your presence. The{" "}
            <span>neck</span> and the wrist are classic for a reason — thin
            skin, easy access, and highly intimate. Control is key; you’re not a
            wild beast (unless you're into that). Feed neatly and no one notices
            a thing.
          </li>

          <li>
            Killing your donor is not only <span>sloppy</span> — it's dangerous.
            A dead body invites investigation, and draining someone to death
            leaves a very different <span>energy signature</span>. Plus, killing
            your source burns the bridge. A living donor can feed you again. A
            corpse just rots. Besides, killing stirs things in you that can
            be... hard to control. That path leads to bloodlust, and bloodlust
            leads to ruin.
          </li>

          <li>
            Feeding is <span>sacred</span> — but discretion is survival. Always
            clean the puncture site. Wipe away blood. <span>Erase memory</span>{" "}
            if you can. The modern world has cameras, DNA tests, and nosy
            neighbors. If you leave behind a trail, even one fang mark, you're
            endangering yourself and the entire local vampire network. Be
            precise. Be quiet. Be forgotten.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
