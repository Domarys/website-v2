import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";

import { SectionCommunityStyle, SectionOpenSourceStyle } from "./styles";

import Icon from "../../components/Icon";

import GitHub from "../../assets/github.svg";
import Dot from "../../assets/dot.svg";
import ArrowWhite from "../../assets/arrow-white.svg";
import IlustraCommunity from "../../assets/ilustra-community.png";
import IconAvoid from "../../assets/icon-avoid.svg";
import axios from "axios";

export default function PageCommunity() {
  const [forks_count, setForksCount] = React.useState(0);
  const [stargazers_count, setStargazersCount] = React.useState(0);

  React.useEffect(() => {
    axios.get(`https://api.github.com/repos/shellhub-io/shellhub`).then(res => {
      setForksCount(res.data.forks_count);
      setStargazersCount(res.data.stargazers_count);
    });
  }, []);
  return (
    <Layout>
      <SEO
        title="Community"
        description="Thousands of people are engaged in the amazing Open Source World. Free to create, change, and share your ideas!  Join us on this journey! The future is Open Source."
        lang="en"
      />
      <SectionCommunityStyle>
        <div className="container">
          <div className="text">
            <h1>Community</h1>
            <p>
              Thousands of people are engaged in the amazing Open Source World.
              Free to create, change, and share your ideas! Join us on this
              journey! The future is Open Source.
            </p>
            <a
              href="https://github.com/shellhub-io"
              target="_blank"
              rel="noreferrer"
              className="btn-github"
            >
              <div className="img-git">
                <GitHub />
              </div>
              <div className="cnt-git">
                <div className="txt-git">View on GitHub</div>
                <div className="val-git">
                  <div className="star">Star {stargazers_count}</div>
                  <div className="dot">
                    <Dot />
                  </div>
                  <div className="fork">Fork {forks_count}</div>
                </div>
              </div>
              <div className="arrow-git">
                <ArrowWhite className="arrow-white" />
              </div>
            </a>
          </div>
          <img
            src={IlustraCommunity}
            className="image"
            alt="Ilustration community"
          />
        </div>
      </SectionCommunityStyle>

      <SectionOpenSourceStyle>
        <div className="container">
          <div className="top">
            <div className="left">
              <h2>The Open Source benefits</h2>
              <p>
                Open Source developers' skills and vision diversity are
                essential to maintain ShellHub code and product quality.
              </p>
            </div>
          </div>
          <div className="main-area">
            <div className="all">
              <div className="card">
                <Icon url={<IconAvoid />} />
                <div>
                  <h3>Avoid vendor lock-in</h3>
                  <p>
                    ShellHub is also available in a fully Open Source version
                    giving you the freedom to adopt the best version for your
                    use case
                  </p>
                </div>
              </div>
              <div className="card">
                <Icon url={<IconAvoid />} />
                <div>
                  <h3>
                    Continuously
                    <br /> innovating
                  </h3>
                  <p>
                    A community committed to improving the experience, quality,
                    and security.
                  </p>
                </div>
              </div>
              <div className="card">
                <Icon url={<IconAvoid />} />
                <div>
                  <h3>No secret sauce</h3>
                  <p>
                    Same ShellHub agent in all versions. Check the code and stay
                    up to date with all changes and updates.{" "}
                  </p>
                </div>
              </div>
            </div>
            <Link to="/get-started">Try ShellHub</Link>
          </div>
        </div>
      </SectionOpenSourceStyle>
    </Layout>
  );
}
