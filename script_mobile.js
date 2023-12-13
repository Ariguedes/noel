(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"scrollBarColor":"#000000","start":"this.playAudioList([this.audio_1FC0E20A_0355_AD13_4141_C50F5C87AB6C, this.audio_1F71B851_034B_FD31_4150_1CCA1C660DB5], false); this.init()","data":{"defaultLocale":"pt","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"volume":1,"pitch":1},"history":{},"name":"Player10417"},"gap":10,"width":"100%","children":["this.MainViewer_mobile"],"height":"100%","layout":"absolute","backgroundColorRatios":[0],"watermark":false,"hash": "6958866c4e43832919991f989719f68c3c523e59cea0a93f7dae2a8c76bc3a35", "definitions": [{"frames":[{"thumbnailUrl":"media/panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":5,"height":2560,"colCount":30,"url":"media/panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":15360},{"rowCount":3,"height":1536,"colCount":18,"url":"media/panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"colCount":12,"url":"media/panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":6144},{"rowCount":1,"height":512,"colCount":6,"url":"media/panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072},{"rowCount":1,"height":1536,"colCount":6,"url":"media/panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","width":9216},{"rowCount":1,"height":2048,"colCount":6,"url":"media/panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr2gen","width":12288}]}}],"label":trans('panorama_18109E9E_03BB_F533_417A_19869A1B6A5E.label'),"vfov":180,"thumbnailUrl":"media/panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_t.jpg","data":{"label":"cozinha"},"overlays":["this.overlay_18D66E8F_03BD_7511_4182_782190827657"],"adjacentPanoramas":[{"yaw":142.68,"panorama":"this.panorama_18080B60_03B5_930F_4182_71269CA8E1F2","distance":7.36,"data":{"overlayID":"overlay_18D66E8F_03BD_7511_4182_782190827657"},"class":"AdjacentPanorama","select":"this.overlay_18D66E8F_03BD_7511_4182_782190827657.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"class":"Panorama","id":"panorama_18109E9E_03BB_F533_417A_19869A1B6A5E","hfov":360,"hfovMin":"135%"},{"items":["this.PanoramaPlayListItem_7DD5C0B9_6361_2471_41C2_94FEA0EADB8F","this.PanoramaPlayListItem_7DD460B8_6361_247F_41D5_8B19A4E3165E",{"player":"this.MainViewer_mobileVideoPlayer","media":"this.video_1D603397_03B5_B331_4173_370B4730562E","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)"},"this.PanoramaPlayListItem_7DD580B9_6361_2471_41D0_6F29E1AF626C"],"class":"PlayList","id":"mainPlayList"},{"viewerArea":"this.MainViewer_mobile","touchControlMode":"drag_rotation","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true,"arrowKeysAction":"translate"},{"progressBackgroundColor":["#000000"],"playbackBarHeadShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipBorderColor":"#767676","progressBottom":10,"subtitlesGap":0,"data":{"name":"Main Viewer"},"playbackBarBorderColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarHeadBorderSize":0,"playbackBarBorderRadius":0,"subtitlesFontColor":"#FFFFFF","toolTipTextShadowBlurRadius":1,"subtitlesBackgroundColor":"#000000","toolTipFontSize":"1.11vmin","progressHeight":2,"playbackBarHeadShadow":true,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"width":"100%","progressRight":"33%","height":"100%","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"propagateClick":false,"subtitlesBottom":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingRight":3,"progressBorderSize":0,"vrPointerColor":"#FFFFFF","subtitlesTop":0,"minWidth":50,"progressBarBorderColor":"#000000","toolTipShadowColor":"#333138","toolTipFontFamily":"Arial","playbackBarBottom":5,"progressBarBorderRadius":2,"minHeight":25,"progressBarBackgroundColorRatios":[0],"id":"MainViewer_mobile","playbackBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingLeft":3,"firstTransitionDuration":0,"progressBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeight":10,"subtitlesTextShadowVerticalLength":1,"subtitlesTextShadowOpacity":1,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","playbackBarBackgroundOpacity":1,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowColor":"#000000","progressBorderColor":"#000000","toolTipShadowBlurRadius":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarRight":0,"progressBorderRadius":2,"vrPointerSelectionColor":"#FF6600","toolTipTextShadowColor":"#000000","playbackBarProgressBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowBlurRadius":1.5,"playbackBarLeft":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"class":"ViewerArea","subtitlesFontFamily":"Arial","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBorderRadius":1,"progressLeft":"33%","playbackBarProgressBackgroundColorRatios":[0]},{"frames":[{"thumbnailUrl":"media/panorama_18080B60_03B5_930F_4182_71269CA8E1F2_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":5,"height":2560,"colCount":30,"url":"media/panorama_18080B60_03B5_930F_4182_71269CA8E1F2_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":15360},{"rowCount":3,"height":1536,"colCount":18,"url":"media/panorama_18080B60_03B5_930F_4182_71269CA8E1F2_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"colCount":12,"url":"media/panorama_18080B60_03B5_930F_4182_71269CA8E1F2_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":6144},{"rowCount":1,"height":512,"colCount":6,"url":"media/panorama_18080B60_03B5_930F_4182_71269CA8E1F2_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072},{"rowCount":1,"height":1536,"colCount":6,"url":"media/panorama_18080B60_03B5_930F_4182_71269CA8E1F2_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","width":9216},{"rowCount":1,"height":2048,"colCount":6,"url":"media/panorama_18080B60_03B5_930F_4182_71269CA8E1F2_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr2gen","width":12288}]}}],"label":trans('panorama_18080B60_03B5_930F_4182_71269CA8E1F2.label'),"vfov":180,"thumbnailUrl":"media/panorama_18080B60_03B5_930F_4182_71269CA8E1F2_t.jpg","data":{"label":"quarto c\u00f3pia"},"overlays":["this.overlay_1F092D9B_03B4_9731_4183_F24E3147E943","this.overlay_1FBE0CF9_034C_F6F1_4186_82064E84D843","this.overlay_1E987026_035F_6D13_4185_FA7C8D3ACB90"],"adjacentPanoramas":[{"yaw":-121.49,"panorama":"this.panorama_18109E9E_03BB_F533_417A_19869A1B6A5E","distance":3.23,"data":{"overlayID":"overlay_1E987026_035F_6D13_4185_FA7C8D3ACB90"},"class":"AdjacentPanorama","select":"this.overlay_1E987026_035F_6D13_4185_FA7C8D3ACB90.get('areas').forEach(function(a){ a.trigger('click') })"},{"yaw":63.3,"panorama":"this.panorama_1EA174E5_034D_9511_417F_E784E16A1CB5","distance":4.38,"data":{"overlayID":"overlay_1FBE0CF9_034C_F6F1_4186_82064E84D843"},"class":"AdjacentPanorama","select":"this.overlay_1FBE0CF9_034C_F6F1_4186_82064E84D843.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"class":"Panorama","id":"panorama_18080B60_03B5_930F_4182_71269CA8E1F2","hfov":360,"hfovMin":"135%"},{"enterPointingToHorizon":true,"initialPosition":{"yaw":-151.25,"class":"PanoramaCameraPosition","pitch":-51.85},"id":"panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_camera","initialSequence":"this.sequence_18AD7C30_034D_F50F_4137_0B3E3DDF35E0","class":"PanoramaCamera"},{"data":{"label":"Track 21"},"id":"audio_1F71B851_034B_FD31_4150_1CCA1C660DB5","loop":true,"autoplay":true,"audio":"this.audiores_1F63953E_034D_7773_4178_309776DC9480","class":"MediaAudio"},{"enterPointingToHorizon":true,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_18080B60_03B5_930F_4182_71269CA8E1F2_camera","initialSequence":"this.sequence_1948A26D_03B5_AD11_4187_4174716A9276","class":"PanoramaCamera"},{"enterPointingToHorizon":true,"displayOriginPosition":{"yaw":-3.68,"stereographicFactor":1,"class":"RotationalCameraDisplayPosition","pitch":-90,"hfov":165},"class":"PanoramaCamera","displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"targetStereographicFactor":0,"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","duration":3000,"targetPitch":-34.5}],"initialPosition":{"yaw":-3.68,"class":"PanoramaCameraPosition","pitch":-34.5},"id":"panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_camera","initialSequence":"this.sequence_192D73AE_03BB_B313_4152_22CA2BB11065"},{"data":{"label":"audio_naiara"},"id":"audio_1FC0E20A_0355_AD13_4141_C50F5C87AB6C","autoplay":true,"audio":"this.audiores_1F7C73F1_034D_72F1_418A_0DDC50D892F2","class":"MediaAudio"},{"label":trans('video_1D603397_03B5_B331_4173_370B4730562E.label'),"loop":true,"thumbnailUrl":"media/video_1D603397_03B5_B331_4173_370B4730562E_t.jpg","data":{"label":"naufragio"},"class":"Video","width":848,"height":480,"id":"video_1D603397_03B5_B331_4173_370B4730562E","video":"this.videores_1FA981F4_034B_6EF7_416D_D8E728E51754"},{"viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobileVideoPlayer","displayPlaybackBar":true,"clickAction":"play_pause","class":"VideoPlayer","displayPlayOverlay":true},{"frames":[{"thumbnailUrl":"media/panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":5,"height":2560,"colCount":30,"url":"media/panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":15360},{"rowCount":3,"height":1536,"colCount":18,"url":"media/panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"colCount":12,"url":"media/panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":6144},{"rowCount":1,"height":512,"colCount":6,"url":"media/panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072},{"rowCount":1,"height":1536,"colCount":6,"url":"media/panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","width":9216},{"rowCount":1,"height":2048,"colCount":6,"url":"media/panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr2gen","width":12288}]}}],"label":trans('panorama_1EA174E5_034D_9511_417F_E784E16A1CB5.label'),"vfov":180,"thumbnailUrl":"media/panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_t.jpg","data":{"label":"banheiro"},"overlays":["this.overlay_1F051355_0354_9331_4189_8193C04FFC21"],"adjacentPanoramas":[{"yaw":-98.85,"panorama":"this.panorama_18080B60_03B5_930F_4182_71269CA8E1F2","distance":3.26,"data":{"overlayID":"overlay_1F051355_0354_9331_4189_8193C04FFC21"},"class":"AdjacentPanorama","select":"this.overlay_1F051355_0354_9331_4189_8193C04FFC21.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"class":"Panorama","id":"panorama_1EA174E5_034D_9511_417F_E784E16A1CB5","hfov":360,"hfovMin":"135%"},{"areas":["this.HotspotPanoramaOverlayArea_1871CFBE_03BD_7373_4122_441C6E9FEFB8"],"maps":[],"useHandCursor":true,"items":[{"distance":50,"pitch":-12.99,"hfov":10.5,"vfov":10.41,"image":"this.res_1F54EA10_03BF_FD0F_414A_12F797EF75C0","yaw":142.68,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"seta_esq"}}],"class":"HotspotPanoramaOverlay","data":{"label":"seta_esq","hasPanoramaAction":true},"id":"overlay_18D66E8F_03BD_7511_4182_782190827657","enabledInCardboard":true},{"player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_7DD5C0B9_6361_2471_41C2_94FEA0EADB8F","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_18109E9E_03BB_F533_417A_19869A1B6A5E_camera","media":"this.panorama_18109E9E_03BB_F533_417A_19869A1B6A5E","class":"PanoramaPlayListItem"},{"player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_7DD460B8_6361_247F_41D5_8B19A4E3165E","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","camera":"this.panorama_18080B60_03B5_930F_4182_71269CA8E1F2_camera","media":"this.panorama_18080B60_03B5_930F_4182_71269CA8E1F2","class":"PanoramaPlayListItem"},{"player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_7DD580B9_6361_2471_41D0_6F29E1AF626C","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","camera":"this.panorama_1EA174E5_034D_9511_417F_E784E16A1CB5_camera","end":"this.trigger('tourEnded')","media":"this.panorama_1EA174E5_034D_9511_417F_E784E16A1CB5","class":"PanoramaPlayListItem"},{"loop":true,"distance":50,"useHandCursor":true,"cues":[],"class":"QuadVideoPanoramaOverlay","vertices":[{"yaw":139.4,"class":"PanoramaPoint","pitch":24.32},{"yaw":-165.89,"class":"PanoramaPoint","pitch":24.14},{"yaw":-166.4,"class":"PanoramaPoint","pitch":-3.77},{"yaw":140.58,"class":"PanoramaPoint","pitch":-5.82}],"video":"this.videores_1FA981F4_034B_6EF7_416D_D8E728E51754","image":"this.res_1FA43F43_034B_7311_4180_A9054594B211","id":"overlay_1F092D9B_03B4_9731_4183_F24E3147E943","autoplay":true,"data":{"label":"Video"}},{"areas":["this.HotspotPanoramaOverlayArea_1820DE25_034C_F511_4169_913478BED394"],"maps":[],"useHandCursor":true,"items":[{"distance":50,"pitch":-21.19,"hfov":10.5,"vfov":10.41,"image":"this.res_1F54EA10_03BF_FD0F_414A_12F797EF75C0","yaw":63.3,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"seta_esq"}}],"class":"HotspotPanoramaOverlay","data":{"label":"seta_esq","hasPanoramaAction":true},"id":"overlay_1FBE0CF9_034C_F6F1_4186_82064E84D843","enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_18766163_035F_6F11_418A_963639B49F65"],"maps":[],"useHandCursor":true,"items":[{"distance":50,"pitch":-27.78,"hfov":10.5,"vfov":10.41,"image":"this.res_1FFC5FAC_035C_F317_416B_7B871293003C","yaw":-121.49,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"seta_dir"}}],"class":"HotspotPanoramaOverlay","data":{"label":"seta_dir","hasPanoramaAction":true},"id":"overlay_1E987026_035F_6D13_4185_FA7C8D3ACB90","enabledInCardboard":true},{"id":"sequence_18AD7C30_034D_F50F_4137_0B3E3DDF35E0","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"gain":0.29,"mp3Url":trans('audiores_1F63953E_034D_7773_4178_309776DC9480.mp3Url'),"class":"AudioResource","id":"audiores_1F63953E_034D_7773_4178_309776DC9480"},{"id":"sequence_1948A26D_03B5_AD11_4187_4174716A9276","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_192D73AE_03BB_B313_4152_22CA2BB11065","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"gain":0.3,"mp3Url":trans('audiores_1F7C73F1_034D_72F1_418A_0DDC50D892F2.mp3Url'),"class":"AudioResource","id":"audiores_1F7C73F1_034D_72F1_418A_0DDC50D892F2"},{"height":480,"gain":0,"id":"videores_1FA981F4_034B_6EF7_416D_D8E728E51754","width":848,"class":"VideoResource","levels":["this.videolevel_7D817E0E_6361_DC13_41C6_718C355EAAEA"]},{"areas":["this.HotspotPanoramaOverlayArea_1F173374_0354_93F7_417F_7F80C02C2694"],"maps":[],"useHandCursor":true,"items":[{"distance":100,"pitch":-27.56,"hfov":10.5,"vfov":10.5,"image":"this.AnimatedImageResource_7DF80E83_6361_DC11_41D3_F6CDED72CDD5","yaw":-98.85,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"GoToQuartoC\u00f3pia"}}],"class":"HotspotPanoramaOverlay","data":{"label":"GoToQuartoCópia","hasPanoramaAction":true},"id":"overlay_1F051355_0354_9331_4189_8193C04FFC21","enabledInCardboard":true},{"id":"HotspotPanoramaOverlayArea_1871CFBE_03BD_7373_4122_441C6E9FEFB8","displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_7DD460B8_6361_247F_41D5_8B19A4E3165E, -1.1076923076923078, -36.35849731663685, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_1871CFBE_03BD_7373_4122_441C6E9FEFB8.toolTip'),"mapColor":"any"},{"class":"ImageResource","id":"res_1F54EA10_03BF_FD0F_414A_12F797EF75C0","levels":[{"height":120,"url":"media/res_1F54EA10_03BF_FD0F_414A_12F797EF75C0_0.png","class":"ImageResourceLevel","width":121}]},{"class":"ImageResource","id":"res_1FA43F43_034B_7311_4180_A9054594B211","levels":[{"height":480,"url":"media/res_1FA43F43_034B_7311_4180_A9054594B211_0.jpg","class":"ImageResourceLevel","width":848}]},{"id":"HotspotPanoramaOverlayArea_1820DE25_034C_F511_4169_913478BED394","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_7DD580B9_6361_2471_41D0_6F29E1AF626C, -146.76923076923077, -49.65939177101968, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any"},{"id":"HotspotPanoramaOverlayArea_18766163_035F_6F11_418A_963639B49F65","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_7DD5C0B9_6361_2471_41C2_94FEA0EADB8F, -71.44615384615385, -43.56314847942755, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"},{"class":"ImageResource","id":"res_1FFC5FAC_035C_F317_416B_7B871293003C","levels":[{"height":120,"url":"media/res_1FFC5FAC_035C_F317_416B_7B871293003C_0.png","class":"ImageResourceLevel","width":121}]},{"framerate":59.94,"type":"video/mp4","codec":"h264","height":480,"id":"videolevel_7D817E0E_6361_DC13_41C6_718C355EAAEA","posterURL":trans('videolevel_7D817E0E_6361_DC13_41C6_718C355EAAEA.posterURL'),"bitrate":1593,"url":trans('videolevel_7D817E0E_6361_DC13_41C6_718C355EAAEA.url'),"class":"VideoResourceLevel","width":848},{"id":"HotspotPanoramaOverlayArea_1F173374_0354_93F7_417F_7F80C02C2694","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_7DD460B8_6361_247F_41D5_8B19A4E3165E, -1.6615384615384616, -36.35849731663685, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"rowCount":1,"frameCount":24,"class":"AnimatedImageResource","finalFrame":"first","colCount":24,"levels":[{"height":200,"url":"media/res_1F3E4704_035B_F317_4175_8D1E1C75BCAC_0.png","class":"ImageResourceLevel","width":4800}],"frameDuration":41,"id":"AnimatedImageResource_7DF80E83_6361_DC11_41D3_F6CDED72CDD5"}],"propagateClick":false,"scripts":{"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"shareSocial":TDV.Tour.Script.shareSocial,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumePlayers":TDV.Tour.Script.resumePlayers,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"startMeasurement":TDV.Tour.Script.startMeasurement,"registerKey":TDV.Tour.Script.registerKey,"translate":TDV.Tour.Script.translate,"textToSpeech":TDV.Tour.Script.textToSpeech,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"unregisterKey":TDV.Tour.Script.unregisterKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeJS":TDV.Tour.Script.executeJS,"quizShowScore":TDV.Tour.Script.quizShowScore,"clone":TDV.Tour.Script.clone,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"createTween":TDV.Tour.Script.createTween,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"init":TDV.Tour.Script.init,"existsKey":TDV.Tour.Script.existsKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setLocale":TDV.Tour.Script.setLocale,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizStart":TDV.Tour.Script.quizStart,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initQuiz":TDV.Tour.Script.initQuiz,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setValue":TDV.Tour.Script.setValue,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getMediaByName":TDV.Tour.Script.getMediaByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"showWindow":TDV.Tour.Script.showWindow,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getOverlays":TDV.Tour.Script.getOverlays,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"openLink":TDV.Tour.Script.openLink,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"downloadFile":TDV.Tour.Script.downloadFile,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"isPanorama":TDV.Tour.Script.isPanorama,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPixels":TDV.Tour.Script.getPixels,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getKey":TDV.Tour.Script.getKey,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer},"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"class":"Player","backgroundColor":["#FFFFFF"],"id":"rootPlayer","scrollBarMargin":2};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.4.js.map
})();
//Generated with v2023.2.4, Wed Dec 13 2023