import React from "react";
import table from "../assets/pointstable.png";
import pubgtable from "../assets/pubgtable.png";

const News = () => {
  return (
    <section className="news">
      <h1>News</h1>

      <div style={{ height: "100%" }}>
        <div className="news_container">
          <div>
            <img
              src="https://images.moneycontrol.com/static-mcnews/2025/02/20250226050427_Patch-Notes-Free-Fire-Max.jpg?impolicy=website&width=770&height=431"
              alt=""
            />
          </div>
          <div className="news_matter">
            <div>
              {" "}
              <h2>Free Fire</h2>
            </div>
            <div>
              {" "}
              <p>
                Garena has started rolling out the latest update for the popular
                game Free Fire Max in India. The OB48 update brings new weapons,
                the MyZone event, and various gameplay improvements. The update
                aims to enhance customisation, balance weapons, and introduce
                new mechanics. Here's everything that's new with the update.
              </p>
            </div>
          </div>
        </div>

        <div className="news_container">
          <div className="news_matter">
            <div>
              {" "}
              <h2>Pubg</h2>
            </div>
            <div>
              {" "}
              <p>
                Player Unknown Battlegrounds (PUBG) Mobile's much-awaited 3.7
                update is reportedly expected to be rolled out on Friday. The
                new update will host fresh content and improvements. The key
                element of this update is going to be the new theme mode: Golden
                Dynasty. The PUBG Mobile 3.7 update will feature an additional
                map, gameplay enhancements, bug fixes, and more.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2025-03/07/full/1741325939-1005.png?im=FeatureCrop,size=(826,465)"
              alt=""
            />
          </div>
        </div>

        <div className="news_container">
          <div>
            <img
              src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/03/call-of-duty-operator-in-black-ops-6-multiplayer.jpg?q=70&fit=crop&w=1140&h=&dpr=1"
              alt=""
            />
          </div>
          <div className="news_matter">
            <div>
              {" "}
              <h2>Call of duty</h2>
            </div>
            <div>
              {" "}
              <p>
                The first March updates for Call of Duty: Black Ops 6 and
                Warzone have been released, introducing numerous bug fixes
                across both titles in the franchise. With the launch of Call of
                Duty: Black Ops 6 and Warzone Season 2 Reloaded, players
                received a wave of new content, events, and gameplay
                adjustments.
              </p>
            </div>
          </div>
        </div>

        <div className="news_container">
          <div className="news_matter">
            <div>
              {" "}
              <h2>Fortnite</h2>
            </div>
            <div>
              {" "}
              <p>
                Based on recent Fortnite leaks, the release date and time for
                the first major update v34.10 for Chapter 6 Season 2 have been
                revealed. The next phase of the storyline kicks off on February
                21, 2025. As a result, it comes as no surprise that information
                about dates and times of the update is slowly being added to the
                files. This is subject to change, but it does provide a timeline
                for the community.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://staticg.sportskeeda.com/editor/2025/03/2dcb8-17413444876313-1920.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="news_container">
          <div>
            <img
              src="https://pbs.twimg.com/media/GlNo_0iXwAA7-ou?format=jpg&name=medium"
              alt=""
            />
          </div>
          <div className="news_matter">
            <div>
              {" "}
              <h2>Valorant</h2>
            </div>
            <div>
              {" "}
              <p>
                The newest patch from Valorant, Patch 10.04, shakes up the game
                for both Agents and gameplay. One of the major highlights is
                that there is a new agent in the Duelist category named Waylay,
                along with reworks for other characters in the form of Clove and
                Deadlock.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h5>Free Fire tier-1 Points table</h5>
          <img
            className="tableimg"
            style={{ borderRadius: "14px", boxShadow: "0 0 30px 0 grey" }}
            width={760}
            src={table}
            alt=""
          />
        </div>

        <div>
          <h5>pubg tier-1 Points table</h5>
          <img
            className="tableimg"
            style={{ borderRadius: "14px", boxShadow: "0 0 30px 0 grey" }}
            width={760}
            src={pubgtable}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default News;
