import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <a href="#main-wrapper" id="backto-top" className="back-to-top">
          <i className="fas fa-angle-double-up" />
        </a>
        {/* Preloader Start Here */}
        <div id="preloader" />
        {/* Preloader End Here */}
        <div id="main-wrapper" className="main-wrapper">
          {/*=====================================*/}
          {/*=        Header Area Start       	=*/}
          {/*=====================================*/}
          <header className="header axil-header header-style-4">
            <div id="axil-sticky-placeholder" />
            <div className="axil-mainmenu">
              <div className>
                <div className="header-navbar">
                  <div className="header-logo">
                    <a href="#"><img src="assets/images/chipmunks-logo.svg" alt="logo" /></a>
                  </div>
                  <div className="header-main-nav">
                    {/* Start Mainmanu Nav */}
                    <nav className="mainmenu-nav" id="mobilemenu-popup">
                      <div className="d-block d-lg-none">
                        <div className="mobile-nav-header">
                          <div className="mobile-nav-logo">
                            <a href="#">
                              <img className="light-mode" src="assets/images/chipmunks-logo.svg" alt="Site Logo" />
                            </a>
                          </div>
                          <button className="mobile-menu-close" data-bs-dismiss="offcanvas"><i className="fas fa-times" /></button>
                        </div>
                      </div>
                      <ul className="mainmenu">
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li><a href="#">Minting</a></li>
                      </ul>
                      <div className="header-btn btn-inner d-block d-sm-none">
                        <a href="#" className="axil-btn btn-fill-white">Connect Wallet</a>
                      </div>
                    </nav>
                    {/* End Mainmanu Nav */}
                  </div>
                  <div className="header-action">
                    <ul className="list-unstyled">
                      <li className="header-btn">
                        <a href="contact.html" className="axil-btn btn-fill-white">Connect Wallet</a>
                      </li>
                      <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                        <button className="btn-wrap btn-dark" data-bs-toggle="offcanvas" data-bs-target="#mobilemenu-popup">
                          <span />
                          <span />
                          <span />
                        </button>
                      </li>
                      <li className="my_switcher d-none">
                        <ul>
                          <li title="Light Mode">
                            <a href="javascript:void(0)" className="setColor light" data-theme="light">
                              <i className="fal fa-lightbulb-on" />
                            </a>
                          </li>
                          <li title="Dark Mode">
                            <a href="javascript:void(0)" className="setColor dark" data-theme="dark">
                              <i className="fas fa-moon" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/*=====================================*/}
          {/*=        Banner Area Start         =*/}
          {/*=====================================*/}
          <section className="banner banner-style-5" />
          {/*=====================================*/}
          {/*=        Service Area Start         =*/}
          {/*=====================================*/}
          <section className="section-smart position-relative">
            <div className="container-chipmunks">
              <div className="row">
                <div className="col-md-6">
                  <div className="smart-head">
                    <span>ABOUT US</span>
                    <h1>
                      SMART <br />
                      CHIPMUNKS CLUB
                    </h1>
                    <p>Deforestation and urbanization caused the disaster, where nearly no animal made it to servive.</p>
                  </div>
                </div>
                <div className="chipmunks-sol">
                  <img src="assets/images/chipmunks-sol.svg" alt="" />
                </div>
              </div>
            </div>
          </section>
          {/*=====================================*/}
          {/*=        Project Area Start         =*/}
          {/*=====================================*/}
          <section className="section-little">
            <div className="container-chipmunks">
              <div className="row">
                <div className="col-md-10">
                  <div className="little-head">
                    <span>LITTLE STORY</span>
                    <h6>
                      There were only 10k cute and smart Chipmunks managed to survive it.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="little-content d-flex align-items-start">
                    <img src="assets/images/little-point.svg" alt="" />
                    <p>Invasions by Aliens , caused the disaster and deforestation.</p>
                  </div>
                  <div className="little-content text-start d-flex align-items-start">
                    <img src="assets/images/little-point.svg" alt="" />
                    <p>
                      There were only 10k cute and smart Chipmunks managed to survive it.
                    </p>
                  </div>
                  <div className="little-content d-flex text-start align-items-start">
                    <img src="assets/images/little-point.svg" alt="" />
                    <p className="mb-0">
                      After the disaster , they decided to live on Binance Smart Chain, a world of cheap
                      gas , instant transactions and beautiful, caring and supportive community.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mt-4 mt-sm-0">
                  <div className="little-content d-flex text-start align-items-start">
                    <img src="assets/images/little-point.svg" alt="" />
                    <p>After landing on BSC, they started calling themselves Smart Chipmunks.</p>
                  </div>
                  <div className="little-content d-flex text-start align-items-start">
                    <img src="assets/images/little-point.svg" alt="" />
                    <p className="mb-0">
                      They aims to help disaster relief organizations , to not let same thing happen to
                      others, and also their holders with various perks they’re offering now and in future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*=====================================*/}
          <section className="section-chipmunks">
            <div className="chipmunks-img">
              <img src="assets/images/chipmunks-line.png" alt="" />
            </div>
          </section>
          <section className="section-minting">
            <div className="container-chipmunks">
              <div className="minting-content">
                <h2>
                  Let’s dive into the perks and benefits Smart Chipmunks are offering to there club members ,
                  who hold them :
                </h2>
                <p>- Minting or Buying a Smart chipmunks gives you access into the Smart Club.</p>
                <p>- As a Smart Club member, You'll have access to the perks and benefits Smart Chipmunks are offering now and in Future.</p>
                <p>
                  - As a Smart Club member , you’ll have access to the perks and benefits Smart
                  Chipmunks are offering now and in future.
                </p>
                <p>- $80k lottery for 10 lucky holders.</p>
                <p>- $200k will be distributed to top community members and top holders of SCC NFTs.</p>
              </div>
            </div>
            <div className="minting-main">
              <div className="row">
                <div className="col-6 col-md-3 mb-4 mb-sm-0">
                  <div className="minting-img">
                    <img src="assets/images/minting-1.png" alt="" />
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-4 mb-sm-0">
                  <div className="minting-img">
                    <img src="assets/images/minting-2.png" alt="" />
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="minting-img">
                    <img src="assets/images/minting-3.png" alt="" />
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="minting-img">
                    <img src="assets/images/minting-4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*=        Testimonial Area Start     =*/}
          {/*=====================================*/}
          <section className="section-income position-relative">
            <div className="container-chipmunks">
              <div className="income-img">
                <img src="assets/images/income.svg" alt="" />
              </div>
              <div className="row justify-content-end">
                <div className="col-md-8">
                  <div className="passive-head">
                    <h2>Passive Income</h2>
                    <p>100% of the Royalty fee from secondary market will be directly transferred to smart DAM Wallet ( community will decide to what to do with those funds, no team royalty ).</p>
                    <h2>NFT Launchpad</h2>
                    <p>SCC members will have early presale access to top notch and top quality NFT projects launching through SmartChip launchpad. 50% of revenue from launchpad will be transferred to smart DAO Wallet.</p>
                    <h2>After The Disaster</h2>
                    <p>
                      Chipmunks needs homes to live on Solana blockchain. 5555 high quality houses will be created on SOL Blockchain and will be airdropped to SCC members. 100% Royalties from it's secondary sales fees will
                      also be distributed to holders.
                    </p>
                    <h2>Christmas/New year Event</h2>
                    <p>Christmas and New year themed NFTs Airdropped to 200 Lucky holders. New Year vacation giveaway to 2 lucky holders (Greece).</p>
                    <h2>Smart Marketplace</h2>
                    <p className="mb-0">
                      SCC's own marketplace, Where it's holders can trade their NFTs for free without secondary marketplace commissions. Fees collected from other NFTs will be distributed to SCC community, But the fees will be
                      lower from other marketplaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*=====================================*/}
          {/*=        Counter Up Area Start      =*/}
          {/*=====================================*/}
          <section className="section-roadmap position-relative">
            <div className="container-chipmunks">
              <div className="padd-roadmap">
                <div className="row">
                  <div className="col-md-12">
                    <div className="tail">
                      <img src="assets/images/tail.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="roadmap-head">
                      <h1>ROADMAP</h1>
                    </div>
                    <div className="roadmap-content">
                      <h2>Stage 1</h2>
                      <ul className="roadmap-menu">
                        <li>- Initial Minting.</li>
                        <li>
                          - Listing on secondary Marketplaces and introduce our own.
                        </li>
                        <li>
                          - Rarity matrix. Publish rarity matrix for community on SCC website.
                        </li>
                        <li>
                          - Exclusive Club membership to Smart ChipMunk holders.
                        </li>
                        <li>- 5% of sale proceeds to disaster relief Organizations (community will choose).</li>
                        <li>
                          - $200k will be distributed to top community members and top holders of SCC NFTs.
                        </li>
                      </ul>
                    </div>
                    <div className="roadmap-content">
                      <h2>Stage 2</h2>
                      <ul className="roadmap-menu">
                        <li>- 100% royalties to SCC NFT holders as passive income.</li>
                        <li>
                          - To create a steady floor, floor sweep starts, along with post launch marketing to gain
                          more interaction.
                        </li>
                        <li>
                          - Smartchip Marketplace. SCC holders can easily trade their Smart ChipMunks on
                          their own marketplace, without any fee. 50% of Marketplace profits will be distributed
                          to SCC members.
                        </li>
                        <li>
                          - Members exclusive Smart ChipMunks Club merch store launches , featuring limited
                          edition: phone cases,mousepads,face masks,shirts,cap tanktops,mugs,socks,
                          shorts,stickers and On demand physical model of your Smart Chipmunk.
                        </li>
                        <li>
                          - Members exclusive Smart ChipMunks Club merch store launches , featuring limited edition: phone cases,mousepads,face masks,shirts,cap tanktops,mugs,socks, shorts,stickers and On demand physical model
                          of your Smart Chipmunk.
                        </li>
                        <li>- Merch Giveaways.</li>
                        <li>
                          - 1/1 NFTs airdrops and Giveaways to OGs.
                        </li>
                      </ul>
                    </div>
                    <div className="roadmap-content roadmap-color">
                      <h2>Stage 3</h2>
                      <ul className="roadmap-menu">
                        <li>
                          - BlueChip Launchpad. We’ll introduce Launchpad for top quality NFT projects to help
                          them with their launches. There’ll be presale allocations for SCC members. Also the
                          50% profit from BlueChip launchpad will be distributed to NFT holders.
                        </li>
                        <li>
                          - Real Estate Houses/Land will be created to airdrop SCC holders.their secondary
                          royalties will be 100% redistributed to holders.
                        </li>
                        <li>
                          - Limited Edition of only 30 1/1 Smart ChipMunks will be auctioned. 50% of proceeds
                          to Smart DAO Wallet.50% to community voted disaster relief Organizations.
                        </li>
                        <li>
                          - Exclusive Private/Public Sale allocation : SCC NFT will be the pass for you to unlock
                          guaranteed private sale allocations of high quality Crypto projects.
                        </li>
                      </ul>
                    </div>
                    <div className="roadmap-content">
                      <h2>Stage 4</h2>
                      <ul className="roadmap-menu">
                        <li>- Collaborate with other projects to get exclusive drops and access to SCC members.</li>
                        <li>- Christmas &amp; NewYear. Christmas themed NFTs airdropped to SCC members.</li>
                        <li>- New Year Vacation Giveaway. 4 lucky holders will win the Giveaway.</li>
                        <li>
                          - Smart Chipmunks themed banner NFTs airdropped to all holders.
                        </li>
                        <li>- Partnerships with other Bluechip projects.</li>
                      </ul>
                    </div>
                    <div className="roadmap-content">
                      <h2>Stage 5</h2>
                      <ul className="roadmap-menu">
                        <li>- Start hiring more devs and expanding team for future development for solana ecosystem.</li>
                        <li>- Unity3d-Solana SDK. As said earlier, this will be the first tool we develop for Solana ecosystem, so game devs can easily develop NFT games on Solana Blockchain.</li>
                        <li>- Develop first ever game on our first Ever BlueChip Tool. Holders will be able to earn in game currency which will be launched after game completion.</li>
                        <li>- Partnerships with other Blue Chip projects.</li>
                      </ul>
                    </div>
                    <div className="roadmap-content mb-0">
                      <h2>Stage Unlimited</h2>
                      <ul className="roadmap-menu">
                        <li>
                          - Team SCC’s main goal is to create complete BlueChip metaverse, where SCC
                          members get rewards from Launchpad, Marketplace and secondary market royalties
                          from both Smart ChipMunks,Aliens and their Real Estate Land.together with our
                          community we’ll develop more tools for BSCecosystem, and more development for
                          SCC project according to community’s demands and opinions.
                        </li>
                        <li>
                          - About the roadmap, In addition to above , we are open for community’s feedbacks
                          and opinions for future.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-airdrop position-relative">
            <div className="container-chipmunks">
              <div className="airdrop-img">
                <img src="assets/images/airdrop.svg" alt="" />
              </div>
              <div className="row justify-content-end">
                <div className="col-md-8 col-lg-7">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="airdrop-head">
                        <h1>AIRDROP</h1>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="airdrop-content">
                        <h6>Step 1</h6>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="airdrop-content">
                        <h6>Step 2</h6>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="airdrop-content">
                        <h6>Step 3</h6>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="airdrop-content">
                        <h6>Step 4</h6>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="airdrop-content">
                        <h6>Step 5</h6>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="airdrop-content">
                        <a href="#">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-line">
            <img src="assets/images/line-ch.png" alt="" />
          </section>
          <section className="faq-area">
            <div className="container-chipmunks">
              <div className="row">
                <div className="col-md-12">
                  <div className="faq">
                    <h1>FAQS</h1>
                  </div>
                </div>
                <div className="faq-accordion">
                  <div className="row accordion" id="accordion1">
                    <div className="col-lg-6 col-xl-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                            - What is Smart ChipMunks Club?
                          </button>
                        </h6>
                        <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>
                              The Smart ChipMunks Club is collection of 10k randomly generated unique digital
                              collectibles on BSC Blockchain
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            How many Smart ChipMunks are available?
                          </button>
                        </h6>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>10000</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            How many traits are there in SCC ?
                          </button>
                        </h6>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>
                              The Smart ChipMunks have 150+ traits with 8 different categories(Fur/skin, Head,
                              Eyes, Clothes, Neck , Expression , Accessories and Background).
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            Will there be secondary marketplace?
                          </button>
                        </h6>
                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>
                              Yes we are in contact with some popular NFT marketplace, will announce soon.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq10" aria-expanded="true" aria-controls="faq10">
                            When is the mint date ?
                          </button>
                        </h6>
                        <div id="faq10" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>
                              Coming Soon.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq20" aria-expanded="false" aria-controls="faq20">
                            What is the mint price?
                          </button>
                        </h6>
                        <div id="faq20" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>
                              0.33 BNB
                            </p>
                          </div>
                        </div>
                      </div>
                      {/*<div class="accordion-item">
                              <h6 class="accordion-header">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq30" aria-expanded="false" aria-controls="faq30">
                                      What is the mint price?
                                  </button>
                              </h6>
                              <div id="faq30" class="accordion-collapse collapse" data-bs-parent="#accordion1">
                                  <div class="accordion-body">
                                      <p>The Smart ChipMunks Club is collection of 5555 randomly generated unique digital collectibles on Solana Blockchain.</p>
                                  </div>
                              </div>
                          </div>*/}
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq40" aria-expanded="false" aria-controls="faq40">
                            Which Wallets do you support ?
                          </button>
                        </h6>
                        <div id="faq40" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>All BNB wallet</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq50" aria-expanded="false" aria-controls="faq50">
                            Can I Mint on my Mobile ?
                          </button>
                        </h6>
                        <div id="faq50" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                          <div className="accordion-body">
                            <p>No</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="col-lg-6 col-xl-6">
                  <div class="faq-accordion">
                      <div class="accordion" >

                      </div>
                  </div>
              </div> */}
              </div>
            </div>
          </section>
          <section className="section-meet">
            <div className="container-chipmunks">
              <div className="row">
                <div className="col-md-12">
                  <div className="meet-head text-center">
                    <span>OUR TEAM</span>
                    <h1>Meet Our Chipmunks</h1>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="meet-card mb-4 mb-sm-0 text-center">
                    <div className="minting-img">
                      <img src="assets/images/alvin.png" alt="" />
                    </div>
                    <h6>Alvin</h6>
                    <p>Managing Director</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="meet-card mb-4 mb-sm-0 text-center">
                    <div className="minting-img">
                      <img src="assets/images/simon.png" alt="" />
                    </div>
                    <h6>Simon</h6>
                    <p>Head Of Finance</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="meet-card text-center">
                    <div className="minting-img">
                      <img src="assets/images/Theodore.png" alt="" />
                    </div>
                    <h6>Theodore</h6>
                    <p>Head Of Development</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="meet-card text-center">
                    <div className="minting-img">
                      <img src="assets/images/Jeanette.png" alt="" />
                    </div>
                    <h6>Jeanette</h6>
                    <p>Artist And Illustrator</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="section-footer">
            <div className="container">
              <div className="footer-button d-flex justify-content-center">
                <div className="footer-button-padding">
                  <a className="sol_btn me-3 btn-res">BUY ON MAGICEDEN</a>
                  <a className="sol_btn">BUY ON DIGITALEYES</a>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-8 col-md-12 col-12">
                  <div className="footer-logo d-flex justify-content-between">
                    <h1>DISCORD</h1>
                    <img src="assets/images/little-point.svg" />
                    <h1>INSTAGRAM</h1>
                    <img src="assets/images/little-point.svg" />
                    <h1>TWITTER</h1>
                  </div>
                  {/* <div class="footer-space">

                  </div> */}
                </div>
                {/* <div class="col-lg-3 col-4">
                  <div class="footer-logo d-flex justify-content-center">

                  </div>
              </div> */}
                {/* <div class="col-lg-3 col-4 text-center">
                  <div class="footer-logo">

                  </div>
              </div> */}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="footer-content">
                    <p>Copyright 2021 Chipmunks Club. Terms &amp; Conditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/*=====================================*/}
          {/*=       Offcanvas Menu Area       	=*/}
          {/*=====================================*/}
          <div className="offcanvas offcanvas-end header-offcanvasmenu" tabIndex={-1} id="offcanvasMenuRight">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <form action="#" className="side-nav-search-form">
                <div className="form-group">
                  <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                  <button className="side-nav-search-btn"><i className="fas fa-search" /></button>
                </div>
              </form>
              <div className="row">
                <div className="col-lg-5 col-xl-6">
                  <ul className="main-navigation list-unstyled">
                    <li><a href="index-1.html">Digital Agency</a></li>
                    <li><a href="index-2.html">Creative Agency</a></li>
                    <li><a href="index-3.html">Personal Portfolio</a></li>
                    <li><a href="index-4.html">Home Startup</a></li>
                    <li><a href="index-5.html">Corporate Agency</a></li>
                  </ul>
                </div>
                <div className="col-lg-7 col-xl-6">
                  <div className="contact-info-wrap">
                    <div className="contact-inner">
                      <address className="address">
                        <span className="title">Contact Information</span>
                        <p>
                          Theodore Lowe, Ap #867-859 <br />
                          Sit Rd, Azusa New York
                        </p>
                      </address>
                      <address className="address">
                        <span className="title">We're Available 24/7. Call Now.</span>
                        <a className="tel" href="tel:8884562790"><i className="fas fa-phone" />(888) 456-2790</a>
                        <a className="tel" href="tel:12125553333"><i className="fas fa-fax" />(121) 255-53333</a>
                      </address>
                    </div>
                    <div className="contact-inner">
                      <h5 className="title">Find us here</h5>
                      <div className="contact-social-share">
                        <ul className="social-share list-unstyled">
                          <li>
                            <a href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>
                          </li>
                          <li>
                            <a href="https://twitter.com/"><i className="fab fa-twitter" /></a>
                          </li>
                          <li>
                            <a href="https://www.behance.net/"><i className="fab fa-behance" /></a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
