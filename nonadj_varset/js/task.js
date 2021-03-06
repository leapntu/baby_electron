const {ipcRenderer} = require('electron')

var na_varset = [
"1.v-fengle-t.wav",
"2.v-chila-t.wav",
"3.v-loga-t.wav",
"4.p-wadim-j.wav",
"5.p-roosa-j.wav",
"6.p-gensim-j.wav",
"7.v-roosa-t.wav",
"8.v-nilbo-t.wav",
"9.v-malsig-t.wav",
"10.p-kicey-j.wav",
"11.p-chila-j.wav",
"12.p-loga-j.wav",
"13.v-wadim-t.wav",
"14.v-roosa-t.wav",
"15.p-nilbo-j.wav",
"16.p-suleb-j.wav",
"17.v-loga-t.wav",
"18.v-balip-t.wav",
"19.p-chila-j.wav",
"20.p-nilbo-j.wav",
"21.p-fengle-j.wav",
"22.v-kicey-t.wav",
"23.v-coomo-t.wav",
"24.v-suleb-t.wav",
"25.p-balip-j.wav",
"26.p-malsig-j.wav",
"27.p-kicey-j.wav",
"28.v-nilbo-t.wav",
"29.v-coomo-t.wav",
"30.p-gensim-j.wav",
"31.p-fengle-j.wav",
"32.p-roosa-j.wav",
"33.v-kicey-t.wav",
"34.v-wadim-t.wav",
"35.p-suleb-j.wav",
"36.p-wadim-j.wav",
"37.p-coomo-j.wav",
"38.v-gensim-t.wav",
"39.v-suleb-t.wav",
"40.v-balip-t.wav",
"41.p-loga-j.wav",
"42.p-malsig-j.wav",
"43.v-chila-t.wav",
"44.v-fengle-t.wav",
"45.p-coomo-j.wav",
"46.p-balip-j.wav",
"47.v-gensim-t.wav",
"48.v-malsig-t.wav"
]

var test_words = [
"1.trained-test-trial.wav",
"1.untrained-test-trial.wav",
"2.trained-test-trial.wav",
"2.untrained-test-trial.wav",
"3.trained-test-trial.wav",
"3.untrained-test-trial.wav",
"4.trained-test-trial.wav",
"4.untrained-test-trial.wav"
]

var ppc = new createjs.PlayPropsConfig().set({loop: -1})
var Q
var video_div
var video_element
var image_element
var audio_obj
var ag
var body
var stage
var canvas
var stimuli = 0
var mode
var famil_number = na_varset.length
var look_record = []
var stimuli_record = []
var exp_start = 0
var habituated = false
var hab_window = 30000
var hab_baseline = 0
var getter_start = 0

Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

function init () {

  video_div = document.getElementById('vidspot')
  canvas = document.getElementById('canvas')
  body = document.getElementById('body')
  video_div.style.display = "none"
  stage = new createjs.Stage(canvas)
  preload()
}

function preload () {
  createjs.Sound.alternateExtensions = ["mp3","wav"];
  var i = 0
  var manifest = []

  while (i < na_varset.length) {
    console.log("Loading Stim", i)
    createjs.Sound.registerSound("../media/"+na_varset[i], "s"+parseInt(i))
    i += 1
  }

  i = 0
  test_words = test_words.shuffle()
  while (i < test_words.length) {
    console.log("Loading Test", i)
    createjs.Sound.registerSound("../media/words/"+test_words[i], "t"+parseInt(i))
    i += 1
  }

  manifest.push( {"id":"fam", "src":"../media/"+"tsums.mp4"} )
  manifest.push( {"id":"get", "src":"../media/"+"get.mp4"} )
  manifest.push( {"id":"check", "src":"../media/"+"check.jpg"})
  createjs.Sound.registerSound("../media/"+"ag.wav", "ag")

  Q = new createjs.LoadQueue(true)
  Q.on('complete', setup)
  Q.loadManifest(manifest)
}

function setup () {
  mode = 'begin'
  window.requestAnimationFrame(mainLoop)
}

function start_famil () {
  video_div.style.display = "inline"
  canvas.style.display = "none"
  video_element= Q.getResult("fam")
  video_element.setAttribute("loop", true)
  video_div.appendChild(video_element)
  createjs.Sound.stop()
  video_element.play()
  audio_obj = createjs.Sound.play("s0")
  exp_start = performance.now()
  stimuli_record.push([na_varset[stimuli], performance.now()])
  mode = 'famil'
}

function start_getter() {
  createjs.Sound.stop()
  video_div.removeChild(image_element)
  video_element= Q.getResult("get")
  video_div.appendChild(video_element)
  video_element.setAttribute("loop", true)
  createjs.Sound.play("ag", ppc)
  video_element.play()
  mode = "getter"
}

function next_test_stimuli() {
  createjs.Sound.stop()
  video_div.removeChild(video_element)
  image_element = Q.getResult("check")
  video_div.appendChild(image_element)
  createjs.Sound.play("t"+parseInt(stimuli),ppc)
  stimuli_record.push([test_words[stimuli], performance.now()])
  mode = "test"
}

function mainLoop (delta) {
  if (mode == 'begin') {
    var begin_message = "When ready to begin, press and hold SPACE"
    var begin_stim = new createjs.Text(begin_message)
    begin_stim.x = 300
    begin_stim.y = canvas.height / 2
    stage.addChild(begin_stim)
    stage.update()
    mode = 'rest_begin'
  }

  else if (mode == 'famil') {
    if (audio_obj.playState == createjs.Sound.PLAY_FINISHED) {

      stimuli += 1
      if (stimuli < na_varset.length){
        stimuli_record.push( [stimuli_record[stimuli_record.length - 1][0], performance.now()] )
        createjs.Sound.stop()
        audio_obj = createjs.Sound.play("s" + parseInt(stimuli))
        stimuli_record.push([na_varset[stimuli], performance.now()])
      }

      if (stimuli >= na_varset.length) {
        stimuli_record.push( [stimuli_record[stimuli_record.length - 1][0], performance.now()] )
        stimuli = 0
        video_div.removeChild(video_element)
        video_element= Q.getResult("get")
        video_div.appendChild(video_element)
        video_element.setAttribute("loop", true)
        createjs.Sound.play("ag",ppc)
        video_element.play()
        mode = "getter"
      }
    }
  }

  else if (mode == 'test') {
    if (space_down == true) {
      var now = performance.now()
      var stimuli_start = stimuli_record[stimuli_record.length - 1][1]
      var total = now - stimuli_start
      if (total > 16300.0) {
        stimuli_record.push( [stimuli_record[stimuli_record.length - 1][0], performance.now()] )
        stimuli += 1
        if (stimuli >= test_words.length) {mode = "end"}
        else {start_getter()}
        }
    }
    if (space_down == false) {
      var now = performance.now()
      var last_look = look_record[look_record.length - 1]
      var away = sum_time( last_look, now )[1]
      if (away > 2000.0) {
        stimuli_record.push( [stimuli_record[stimuli_record.length - 1][0], performance.now()] )
        stimuli += 1
        if (stimuli >= test_words.length) {mode = "end"}
        else {start_getter()}
        }
    }
  }

  else if (mode=="end") {
    createjs.Sound.stop()
    video_div.style.display = "none"
    canvas.style.display = "inline"
    stage.removeAllChildren()
    stage.update()
    var end_message = "Thank you for participating!  :)"
    var end_stim = new createjs.Text(end_message)
    end_stim.x = 300
    end_stim.y = canvas.height / 2
    stage.addChild(end_stim)
    stage.update()
    write_data()
    mode = "all_stop"
  }

  window.requestAnimationFrame(mainLoop)
}

function write_data(){
  meta = JSON.parse(localStorage.meta)
  data = {
    "name": meta.name,
    "age": meta.age,
    "ra": meta.ra,
    "look_record": look_record,
    "stimuli_record": stimuli_record
  }
  console.log(ipcRenderer.sendSync('write_data', data))
}

document.addEventListener("keydown", handle_keydown)
document.addEventListener("keyup", handle_keyup)

var space_down = false

function handle_keyup (e) {
  if (e.code == "Space") {
    space_down = false
    look_record.push(performance.now())
  }
}

function handle_keydown (e) {
  if (space_down == false && e.code == "Space") {
    space_down = true
    look_record.push(performance.now())
    if (mode == 'rest_begin'){start_famil()}
    if (mode == 'getter'){mode = "nil"; next_test_stimuli()}
  }

  else if (e.code == "Escape") {
    mode = "end"
  }

}

function sum_index (start, stop) {
  if (start > stop) {return "error"}
  var looking = 0
  var away = 0
  var current = start
  while (current != stop) {
    var s = look_record[current]
    var t = look_record[current + 1]
    var delta = t - s
    if (current % 2 == 0) {
      looking += delta
    }
    else if (current % 2 == 1) {
      away += delta
    }
    current += 1
  }
  return [looking, away]
}

function sum_time (start_time, stop_time) {
  if (start_time > stop_time) {return "error"}

  var delta = stop_time - start_time
  var looking = 0
  var away = 0
  var end_i = look_record.length - 1
  var start_i = 0
  var stop_i = end_i
  var i = 0
  var val = 0

  while (i < end_i + 1) {
    var val = look_record[i]
    if ( (val < start_time) ) {start_i = i + 1}
    if ( (val <= stop_time) ) {stop_i = i}
    i += 1
  }

  if (start_time > look_record[end_i]) {start_i = 'above'}
  if (stop_time < look_record[0]) {stop_i = 'below'}

  if (start_i == 'above') {
    if (end_i % 2 == 0) {
      return [delta, away]
    }
    else { return [looking, delta] }
  }

  else if (stop_i == 'below') {
    return [looking, delta]
  }

  else {
    var low_delta = look_record[start_i] - start_time
    var high_delta = stop_time - look_record[stop_i]

    if (start_i % 2 == 0) { away += low_delta }
    else { looking += low_delta }

    if (stop_i % 2 == 0) { looking += high_delta}
    else {away += high_delta}

    var result = sum_index(start_i, stop_i)
    looking += result[0]
    away += result[1]

    return [looking, away]
  }
}
