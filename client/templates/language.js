Session.set('value-language-1', 100);
Session.set('value-language-2', 95);
Session.set('value-language-3', 70);
Session.set('value-language-4', 40);
Session.set('text-language-1', 'polish    native');

Template.languages.helpers({
  circularOptions : function() {
    return {
      'canvasSize': 150,
      'arcWidth': 3,
      'tweenDuration': 300,
      'containerId': 'language-1',
      'sessionValueKey': 'value-language-1',
      'sessionTextKey': 'text-language-1',
      'borderClass': 'progress-border',
      'progressClass': 'progress-circular-bar',
      'textClass': 'progress-text'
    }
  },
  circularOptionss : function() {
    return {
      'canvasSize': 150,
      'arcWidth': 3,
      'tweenDuration': 300,
      'containerId': 'language-2',
      'sessionValueKey': 'value-language-2',
      'sessionTextKey': 'text-language-1',
      'borderClass': 'progress-border',
      'progressClass': 'progress-circular-bar'
    }
  },
  circularOptionsss : function() {
    return {
      'canvasSize': 150,
      'arcWidth': 3,
      'tweenDuration': 300,
      'containerId': 'language-3',
      'sessionValueKey': 'value-language-3',
      'sessionTextKey': 'text-language-1',
      'borderClass': 'progress-border',
      'progressClass': 'progress-circular-bar'
    }
  },
  circularOptionssss : function() {
    return {
      'canvasSize': 150,
      'arcWidth': 3,
      'tweenDuration': 300,
      'containerId': 'language-4',
      'sessionValueKey': 'value-language-4',
      'sessionTextKey': 'text-language-1',
      'borderClass': 'progress-border',
      'progressClass': 'progress-circular-bar'
    }
  }
});
