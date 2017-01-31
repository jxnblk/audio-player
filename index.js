
var audio = require('./lib/audio');

module.exports = function() {

  this.playing = false;

  this.audio = audio;
  //this.currentTime = audio.currentTime;
  //this.duration = audio.duration;
  
  this.play = function(src) {
    if (src != audio.src) { audio.src = src; }
    audio.play();
    this.playing = src;
  }

  this.pause = function() {
    audio.pause();
    this.playing = false;
  }
  
  this.isPlaying = function() {
    if (audio.duration > 0 && !audio.paused)
      return true;
    else 
      return false;
  }

  this.playPause = function(src) {
    if (src != this.playing) {
      this.play(src);
    } else {
      this.pause();
    }
  }

  this.seek = function(e) {
    if (!audio.readyState) return false;
    var percent = e.offsetX / e.target.offsetWidth || (e.layerX - e.target.offsetLeft) / e.target.offsetWidth;
    var time = percent * audio.duration || 0;
    audio.currentTime = time;
  }

  this.init = function() {
    // Potentially add audio event listeners
    return this;
  }

  return this.init();

};

