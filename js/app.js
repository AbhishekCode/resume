
/** Main application component. */
var App = React.createClass({
  displayName: 'App',

  render: function() {
    return React.DOM.div({className:'app'},
      JQueryMobilePage({id:'one', title:'Summary'}, PageOneContent(null)),
      JQueryMobilePage({id:'two', title:'Experience'}, PageTwoContent(null)),
      JQueryMobilePage({id:'three', title:'Education'}, PageThreeContent(null)),
      JQueryMobilePage({id:'four', title:'Skill'}, PageFourContent(null)),
      JQueryMobilePage({id:'five', title:'Projects'}, PageFiveContent(null)),
      JQueryMobilePage({id:'six', title:'Contact'}, PageSixContent(null))
    );
  }
});
App = React.createFactory(App);

/** jQuery Mobile button component. */
var JQueryMobileButton = React.createClass({
  displayName: 'JQueryMobileButton',

  getDefaultProps: function() {
    return {className:'ui-btn ui-shadow ui-corner-all'};
  },

  render: function() {
    return React.DOM.p(null,
      React.DOM.a(this.props, this.props.children)
    );
  }
});
JQueryMobileButton = React.createFactory(JQueryMobileButton);

/** jQuery Mobile page content component. */
var JQueryMobileContent = React.createClass({
  displayName: 'JQueryMobileContent',

  render: function() {
    return React.DOM.div({role:'main', className:'ui-content'},
      this.props.children
    );
  }
});
JQueryMobileContent = React.createFactory(JQueryMobileContent);

/** jQuery Mobile footer component. */
var JQueryMobileFooter = React.createClass({
  displayName: 'JQueryMobileFooter',

  render: function() {
    return React.DOM.div({'data-role':'footer'},
      React.DOM.h4(null, 'Page footer')
    );
  }
});
JQueryMobileFooter = React.createFactory(JQueryMobileFooter);

/** jQuery Mobile header component. */
var JQueryMobileHeader = React.createClass({
  displayName: 'JQueryMobileHeader',

  render: function() {
    return React.DOM.div({'data-role':'header', 'data-theme':this.props.headerTheme},
      React.DOM.h1(null, this.props.title)
    );
  }
});
JQueryMobileHeader = React.createFactory(JQueryMobileHeader);

/// Title Section component
var TitleSection = React.createClass({
  displayName: 'TitleSection',

  render: function() {
    return React.DOM.div({'data-role':'header', 'data-theme':this.props.headerTheme},
      React.DOM.h1(null, this.props.title+' ~ Programmer'),
      React.DOM.h6(null, 'Addres:- Mumbai, India'),
      React.DOM.h6(null, 'M:- +919967596120 , Email:- abhishekcode1@gmail.com')
      //TODO: make hyperlink for website and email; 
      // Style text 
    );
  }
});
TitleSection = React.createFactory(TitleSection);


/** jQuery Mobile page component. */
var JQueryMobilePage = React.createClass({
  displayName: 'JQueryMobilePage',

  getDefaultProps: function() {
    return {'data-role':'page', 'data-theme':'a', headerTheme:'a'};
  },

  render: function() {
    var props = {};
    for (var key in this.props) {
      props[key] = this.props[key];
    }
    return React.DOM.div(props,
//         React.DOM.a({href:'http://www.indexzero.in/'},   TitleSection({title:'Abhishek Kumar Singh', headerTheme:this.props.headerTheme})),
      JQueryMobileButton({href:'http://www.indexzero.in/'},'Abhishek Kumar Singh (Software Developer)'),  
//        TitleSection({title:'Abhishek Kumar Singh', headerTheme:this.props.headerTheme}),
      JQueryMobileHeader({title:this.props.title, headerTheme:this.props.headerTheme}),
      JQueryMobileContent(null, this.props.children),
      JQueryMobileFooter(null)
    );
  }
});
JQueryMobilePage = React.createFactory(JQueryMobilePage);

/** Application page one component. */
// Summary
var PageOneContent = React.createClass({
  displayName: 'PageOneContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Summary:'),
      React.DOM.li(null,'3+ years of experience in Software Development.'),
      React.DOM.li(null,'Knowledge of fronted technlologies like HTML, CSS, JavaScript, ReactJS, JQuery etc.'),
      React.DOM.li(null,'Knowledge of cross platform app development using React-Native and Phonegap'),
      React.DOM.li(null,'Knowledge of game development with Unity3d, Impactjs Game Engines.'),
      React.DOM.li(null,'Profound knowledge of client-side game development includes – UI, Sound, Graphics and Animation.'),
      React.DOM.li(null,'Worked on server-side/ Backend for Multiplayer games.'),
      React.DOM.li(null,'Knowledge of programming with Java, JavaScript and C#.'),
      React.DOM.li(null,'Knowledge of Software Development Life Cycle with modern practices like Agile(Scrum).'),
      JQueryMobileButton({href:'#two'}, 'Experience'),
      JQueryMobileButton({href:'#three'}, 'Education'),
      JQueryMobileButton({href:'#four'}, 'Skills'),
      JQueryMobileButton({href:'#five'}, 'Projects'),
      JQueryMobileButton({href:'#six'},'Contact')
    );
  }
});
PageOneContent = React.createFactory(PageOneContent);

/** Application page two component. */
// Experience section
var PageTwoContent = React.createClass({
  displayName: 'PageTwoContent',

  render: function() {
    return React.DOM.div(null,
        React.DOM.h2(null, 'Experience:'),
        React.DOM.h4(null, 'Courgette Concepts', React.DOM.code(null, ' (Full Stack Software Developer: March 2016-present)')),
        React.DOM.ul(null , 'Responsibilities:',  
                    React.DOM.li(null,'Creating web application with ReactJS, nodeJS'),
                    React.DOM.li(null,'Creating cross plateform mobile apps using react-native'),
                    React.DOM.li(null,'Writing functional and automation test')
                  ) ,   
        
        React.DOM.h4(null, 'BYOF Studios', React.DOM.code(null, ' (Game Developer: January 2015-Feb 2016)')),
        React.DOM.ul(null , 'Responsibilities:',  
                    React.DOM.li(null,'Collaborate with team members to develop innovative games.'),
                    React.DOM.li(null,'Rapidly prototype and iterate gameplay ideas.'),
                    React.DOM.li(null,'Perform debugging and troubleshooting of game applications.'),
                    React.DOM.li(null,'Stay abreast with latest technology developments in gaming industry.')
                  ) ,           
        React.DOM.h4(null, 'Code Red Solutions', React.DOM.code(null, ' (Software Developer: May 2013-December 2014)')),
        React.DOM.ul(null , 'Responsibilities:',  
                        React.DOM.li(null,'Collaborate with team to develop games and web projects.'),
                        React.DOM.li(null,'Rapidly prototype new ideas.'),
                        React.DOM.li(null,'Testing and troubleshooting games and web projects.')
                  ) ,   
        React.DOM.h4(null, 'CMS Infosystem Pvt. Ltd.', React.DOM.code(null, ' (Engineer: September 2012-March 2013)')), 
      JQueryMobileButton({href:'#one'}, 'Summary'),
      JQueryMobileButton({href:'#three'}, 'Education'),
      JQueryMobileButton({href:'#four'}, 'Skills'),
      JQueryMobileButton({href:'#five'}, 'Projects'),
      JQueryMobileButton({href:'#six'},'Contact')
    );
  }
});
PageTwoContent = React.createFactory(PageTwoContent);

// Education Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  
var PageThreeContent = React.createClass({
  displayName: 'PageThreeContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Education:'),
      React.DOM.li(null,'B.Tech Degree in Information Technology from Uttar Pradesh Technical University.',
                   React.DOM.br(null),
                   'Completed in 2012 with 71.24% from Dr. Rizvi College of Engineering.'),
      React.DOM.li(null,'Completed 10+2 with 57% marks in 2008 from UP Board.'),
      React.DOM.li(null,'Completed 10th with 65% marks in 2006 from UP Board.'),
      JQueryMobileButton({href:'#one'}, 'Summary'),
      JQueryMobileButton({href:'#two'}, 'Experience'),
      JQueryMobileButton({href:'#four'}, 'Skills'),
      JQueryMobileButton({href:'#five'}, 'Projects'),
      JQueryMobileButton({href:'#six'},'Contact')
    );
  }
});
PageThreeContent = React.createFactory(PageThreeContent);


// Technical Skill Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  
var PageFourContent = React.createClass({
  displayName: 'PageFourContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Skill:'),
      React.DOM.li(null,'Languages: Java, JavaScript , C#.'),
      React.DOM.li(null,'Game Engine: Unity3d, ImpactJs, Phaser.'),
      React.DOM.li(null,'IDE: Netbeans , XCode , Visual Studio, Android Studio.'),
      React.DOM.li(null,'Server Side: Smartfox Multiplayer Game Server , AWS.'),
      React.DOM.li(null,'Web frontend: HTML, CSS, jQuery, bootstrap.'),
      React.DOM.li(null,'Database: MySQL, Oracle and MS Access database, DynamoDB.'),
      React.DOM.li(null,'Version Control: Git.'),
      React.DOM.li(null,'OS: Windows , OSX and Ubuntu.'),
      JQueryMobileButton({href:'#one'}, 'Summary'),
      JQueryMobileButton({href:'#two'}, 'Experience'),
      JQueryMobileButton({href:'#three'}, 'Education'),
      JQueryMobileButton({href:'#five'}, 'Projects'),
      JQueryMobileButton({href:'#six'},'Contact')
    );
  }
});
PageFourContent = React.createFactory(PageFourContent);


// project Skill Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  
var PageFiveContent = React.createClass({
  displayName: 'PageFiveContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Selected Projects:'),
      React.DOM.li(null,'Bluff Party- Card game ',
                   React.DOM.a({href:'https://play.google.com/store/apps/details?id=com.byofstudios.bluff'}, 'link')),
      React.DOM.li(null,'Legendary Strike ',React.DOM.a({href:'https://itunes.apple.com/in/app/legendary-strike/id913110478?mt=8'}, 'link')),
      React.DOM.li(null,'Apcolite Runner ',  React.DOM.a({href:'https://www.asianpaints.com/campaign/apcolite/apcolite-runner.html'}, 'link')),
      React.DOM.p(null,'A lot more of my open source work can be found on ',  React.DOM.a({href:'https://github.com/AbhishekCode/'}, 'Github')),
      JQueryMobileButton({href:'#one'}, 'Summary'),
      JQueryMobileButton({href:'#two'}, 'Experience'),
      JQueryMobileButton({href:'#three'}, 'Education'),
      JQueryMobileButton({href:'#four'}, 'Skills'),
      JQueryMobileButton({href:'#six'},'Contact')
    );
  }
});
PageFiveContent = React.createFactory(PageFiveContent);

// project Skill Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  
var PageSixContent = React.createClass({
  displayName: 'PageSixContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Contact:'),
       React.DOM.ul( null ,  
                    React.DOM.a({href:'https://github.com/AbhishekCode'}, 'Github'),
                    React.DOM.br(),
                    React.DOM.a({href:'https://twitter.com/Abvishek'}, 'Twitter'),
                    React.DOM.br(),
                    React.DOM.a({href:'https://www.facebook.com/profile.php?id=100002439849117'}, 'Facebook'),
                    React.DOM.br(),
                    React.DOM.a({href:'http://www.indexzero.in/'}, 'Website'),
                    React.DOM.br()
                  ),
      JQueryMobileButton({href:'#one'}, 'Summary'),
      JQueryMobileButton({href:'#two'}, 'Experience'),
      JQueryMobileButton({href:'#three'}, 'Education'),
      JQueryMobileButton({href:'#four'}, 'Skills'),
      JQueryMobileButton({href:'#five'}, 'Projects')
    );
  }
});
PageSixContent = React.createFactory(PageSixContent);


/** Application popup page component. */
var PagePopUpContent = React.createClass({
  displayName: 'PagePopUpContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.ul( null ,  
                    React.DOM.a({href:'https://github.com/AbhishekCode'}, 'Github'),
                    React.DOM.br(),
                    React.DOM.a({href:'https://twitter.com/Abvishek'}, 'Twitter'),
                    React.DOM.br(),
                    React.DOM.a({href:'https://www.facebook.com/profile.php?id=100002439849117'}, 'Facebook'),
                    React.DOM.br(),
                    React.DOM.a({href:'http://www.indexzero.in/'}, 'Website'),
                    React.DOM.br()
                  ),
   
      JQueryMobileButton({href:'#one', 'data-rel':'back', className:'ui-btn ui-shadow ui-corner-all ui-btn-inline ui-icon-back ui-btn-icon-left'}, 'Close')
    );
  }
});
PagePopUpContent = React.createFactory(PagePopUpContent);

// Render application.
ReactDOM.render(App(null), document.getElementById('content'));
