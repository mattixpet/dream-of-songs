// Data for audio

(function () {

'use strict';

var audio_data = [
	// format
	// {
	//     'name' : readable song name
	//     'url' : 'relative path of file',
	//     'year' : closest we have to year of creation
	//     'cover' : boolean
	// }, etc.
	// Where name is a readable name as a string
	// url is the path to the file usable on a domain (e.g. matthiaspetursson.com/songs/url)
	// Year is the closest I could find to the actual year I created the song
	// Cover indicates if the song was written by someone else (true if so)
	// e.g.
	{
		'name' : 'boom meira flipp (cover)',
		'url' : 'Lelegar_upptokur/2011/boom meira flipp (cover).mp3',
		'year' : 2011,
		'cover' : true
	},
	{
		'name' : 'casual_KORG (A78)',
		'url' : 'Lelegar_upptokur/2011/casual_KORG (A78).mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'cmoll a-bass cdúr millikeflz',
		'url' : 'Lelegar_upptokur/2011/cmoll a-bass cdúr millikeflz.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'dabb barabb babb babb barabb (A66)',
		'url' : 'Lelegar_upptokur/2011/dabb barabb babb babb barabb (A66).mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'demo af synth shitti',
		'url' : 'Lelegar_upptokur/2011/demo af synth shitti.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'f mollz, sax sólz',
		'url' : 'Lelegar_upptokur/2011/f mollz, sax sólz.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'fm belfast flipp (cover)',
		'url' : 'Lelegar_upptokur/2011/fm belfast flipp (cover).mp3',
		'year' : 2011,
		'cover' : true
	},
	{
		'name' : 'fmoll bass flepp',
		'url' : 'Lelegar_upptokur/2011/fmoll bass flepp.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'grateful_matti_13.02.2010',
		'url' : 'Lelegar_upptokur/2011/grateful_matti_13.02.2010.mp3',
		'year' : 2010,
		'cover' : false
	},
	{
		'name' : 'human after all yamaha DGX-220 (cover)',
		'url' : 'Lelegar_upptokur/2011/human after all yamaha DGX-220 (cover).mp3',
		'year' : 2011,
		'cover' : true
	},
	{
		'name' : 'lolCmollsamaogcubase',
		'url' : 'Lelegar_upptokur/2011/lolCmollsamaogcubase.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'orgel_matti_13.02.2010',
		'url' : 'Lelegar_upptokur/2011/orgel_matti_13.02.2010.mp3',
		'year' : 2010,
		'cover' : false
	},
	{
		'name' : 'piano fmoll gdúr',
		'url' : 'Lelegar_upptokur/2011/piano fmoll gdúr.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'piano-bassi-c-moll-dust',
		'url' : 'Lelegar_upptokur/2011/piano-bassi-c-moll-dust.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'random f moll sax shit',
		'url' : 'Lelegar_upptokur/2011/random f moll sax shit.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'saucerful of secrets organ (cover)',
		'url' : 'Lelegar_upptokur/2011/saucerful of secrets organ (cover).mp3',
		'year' : 2011,
		'cover' : true
	},
	{
		'name' : 'skúr protoman',
		'url' : 'Lelegar_upptokur/2011/skúr protoman.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'wtf_man',
		'url' : 'Lelegar_upptokur/2011/wtf_man.mp3',
		'year' : 2011,
		'cover' : false
	},
	{
		'name' : 'american_psycho',
		'url' : 'Lelegar_upptokur/amr/2014/american_psycho.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'anna',
		'url' : 'Lelegar_upptokur/amr/2014/anna.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'blackbird_rodd (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/blackbird_rodd (cover).mp3',
		'year' : 2014,
		'cover' : true
	},
	{
		'name' : 'brynjar_ekkisvogott',
		'url' : 'Lelegar_upptokur/amr/2014/brynjar_ekkisvogott.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'BRYNJAR_ja_2013',
		'url' : 'Lelegar_upptokur/amr/2014/BRYNJAR_ja_2013.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'fallegt_orgel_bjart',
		'url' : 'Lelegar_upptokur/amr/2014/fallegt_orgel_bjart.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'hero_drunk (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/hero_drunk (cover).mp3',
		'year' : 2014,
		'cover' : true
	},
	{
		'name' : 'kathryn',
		'url' : 'Lelegar_upptokur/amr/2014/kathryn.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'kosi_piano',
		'url' : 'Lelegar_upptokur/amr/2014/kosi_piano.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Lagahugm',
		'url' : 'Lelegar_upptokur/amr/2014/Lagahugm.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'ominous',
		'url' : 'Lelegar_upptokur/amr/2014/ominous.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'REC_0012',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0012.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'REC_0023',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0023.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'REC_0024',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0024.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'REC_0025',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0025.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'REC_0030',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0030.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'REC_0031',
		'url' : 'Lelegar_upptokur/amr/2014/REC_0031.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'somewhere_over_the_gt_sg (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/somewhere_over_the_gt_sg (cover).mp3',
		'year' : 2014,
		'cover' : true
	},
	{
		'name' : 'tango_spurningarmerki',
		'url' : 'Lelegar_upptokur/amr/2014/tango_spurningarmerki.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'The_lord_is_my_shepherd',
		'url' : 'Lelegar_upptokur/amr/2014/The_lord_is_my_shepherd.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'thu_komst_vid_hjartad_asta_songur (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/thu_komst_vid_hjartad_asta_songur (cover).mp3',
		'year' : 2014,
		'cover' : true
	},
	{
		'name' : 'wots_uh_enn_meira_falskt (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/wots_uh_enn_meira_falskt (cover).mp3',
		'year' : 2014,
		'cover' : true
	},
	{
		'name' : 'wots_uh_the_deal_nokk_falskt (cover)',
		'url' : 'Lelegar_upptokur/amr/2014/wots_uh_the_deal_nokk_falskt (cover).mp3',
		'year' : 2014,
		'cover' : true
	},
	{
		'name' : 'ali_guitar',
		'url' : 'Lelegar_upptokur/iowa/2014/ali_guitar.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'ali_moreSongur',
		'url' : 'Lelegar_upptokur/iowa/2014/ali_moreSongur.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'ali_songur',
		'url' : 'Lelegar_upptokur/iowa/2014/ali_songur.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'bend_guitar',
		'url' : 'Lelegar_upptokur/iowa/2014/bend_guitar.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'birds',
		'url' : 'Lelegar_upptokur/iowa/2014/birds.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'clichechordsweirdrythm',
		'url' : 'Lelegar_upptokur/iowa/2014/clichechordsweirdrythm.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'cosy piano',
		'url' : 'Lelegar_upptokur/iowa/2014/cosy piano.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'ominous_stanley',
		'url' : 'Lelegar_upptokur/iowa/2014/ominous_stanley.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'rythm guitar',
		'url' : 'Lelegar_upptokur/iowa/2014/rythm guitar.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Voice 010',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 010.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Voice 012',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 012.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Voice 015',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 015.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Voice 016',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 016.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Voice 018',
		'url' : 'Lelegar_upptokur/iowa/2014/Voice 018.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Voice 008',
		'url' : 'Lelegar_upptokur/jan2015/Voice 008.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 009',
		'url' : 'Lelegar_upptokur/jan2015/Voice 009.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 010',
		'url' : 'Lelegar_upptokur/jan2015/Voice 010.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 011',
		'url' : 'Lelegar_upptokur/jan2015/Voice 011.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'afmæli',
		'url' : 'Lelegar_upptokur/jun2015/afmæli.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 012',
		'url' : 'Lelegar_upptokur/jun2015/Voice 012.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 013',
		'url' : 'Lelegar_upptokur/jun2015/Voice 013.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 014',
		'url' : 'Lelegar_upptokur/jun2015/Voice 014.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 015',
		'url' : 'Lelegar_upptokur/jun2015/Voice 015.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 016',
		'url' : 'Lelegar_upptokur/jun2015/Voice 016.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 020 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 020 (cover).mp3',
		'year' : 2015,
		'cover' : true
	},
	{
		'name' : 'Voice 021',
		'url' : 'Lelegar_upptokur/jun2015/Voice 021.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 022',
		'url' : 'Lelegar_upptokur/jun2015/Voice 022.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 023 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 023 (cover).mp3',
		'year' : 2015,
		'cover' : true
	},
	{
		'name' : 'Voice 024',
		'url' : 'Lelegar_upptokur/jun2015/Voice 024.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 025',
		'url' : 'Lelegar_upptokur/jun2015/Voice 025.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 026 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 026 (cover).mp3',
		'year' : 2015,
		'cover' : true
	},
	{
		'name' : 'Voice 027 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 027 (cover).mp3',
		'year' : 2015,
		'cover' : true
	},
	{
		'name' : 'Voice 028',
		'url' : 'Lelegar_upptokur/jun2015/Voice 028.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 029 (cover)',
		'url' : 'Lelegar_upptokur/jun2015/Voice 029 (cover).mp3',
		'year' : 2015,
		'cover' : true
	},
	{
		'name' : 'Voice 030',
		'url' : 'Lelegar_upptokur/jun2015/Voice 030.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 031',
		'url' : 'Lelegar_upptokur/jun2015/Voice 031.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 032',
		'url' : 'Lelegar_upptokur/jun2015/Voice 032.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 033',
		'url' : 'Lelegar_upptokur/jun2015/Voice 033.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-23 11-12-33',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-23 11-12-33.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-25 00-53-04',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-25 00-53-04.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-28 00-41-38',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-28 00-41-38.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-28 00-51-47',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-28 00-51-47.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-28 01-07-22',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-28 01-07-22.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-28 15-30-00',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/Audio recording 2016-10-28 15-30-00.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'HARDCORESHIT',
		'url' : 'Lelegar_upptokur/Nexus5X/05.11.2016/HARDCORESHIT.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-08-05 12-50-40',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-08-05 12-50-40.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-08-12 11-50-11',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-08-12 11-50-11.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-08-12 11-57-09',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-08-12 11-57-09.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-02 13-13-27',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-10-02 13-13-27.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Audio recording 2016-10-06 23-01-38',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/Audio recording 2016-10-06 23-01-38.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'mattahugmynd0',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/mattahugmynd0.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'mattahugmynd1',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/mattahugmynd1.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'mattahugmynd2',
		'url' : 'Lelegar_upptokur/Nexus5X/11.10.2016/mattahugmynd2.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'fells good',
		'url' : 'Lelegar_upptokur/Nexus5X/16.nóv.2017/2017_11_04_01_00_20 fells good.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'the hills of madness',
		'url' : 'Lelegar_upptokur/Nexus5X/16.nóv.2017/2017_11_05_15_12_40 the hills of madness.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'brotafgömlu',
		'url' : 'Lelegar_upptokur/Nexus5X/16.nóv.2017/2017_11_13_15_15_50brotafgömlu.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'piazbassi',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_16_21_05_11piazbassi.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'elskuamollklassik!!!',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_19_23_22_30elskuamollklassik!!!.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'wastheresomeonethere',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_19_23_33_45wastheresomeonethere.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'wagner',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_23_19_30_59wagner.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'socani',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_23_20_43_03socani.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'wagner2',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_11_26_22_37_50wagner2.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'beethovenloop',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_05_17_41_29beethovenloop.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'beethovenshield',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_06_14_28_28beethovenshield.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'Jesús Christ',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_07_00_45_42 Jesús Christ.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'beethov moon',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_18_19_59_42beethov moon.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'pompeiclassical',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_18_20_34_52pompeiclassical.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'socani classical interludes',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_21_22_01_15socani classical interludes.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'wagner',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_22_19_35_16wagner.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'ósk',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_23_15_12_56ósk.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'ósk hraðar',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_23_17_06_14ósk hraðar.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'óskata outro',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_23_17_39_04óskata outro.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'steady bass beat',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_25_16_15_25steady bass beat.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'evergoingup',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_25_16_47_32evergoingup.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'gamalt en rythmott',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_27_12_00_42 gamalt en rythmott.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'simple loop',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_27_12_48_37 simple loop.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'hryllingur',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2017_12_28_17_39_03hryllingur.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'einmitt',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_05_17_02_50 einmitt.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'pompeihug',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_07_22_57_51pompeihug.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'lalala',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_15_18_55_26lalala.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'needswork',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_18_14_58_08needswork.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'ekki gler',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_22_16_10_28 ekki gler.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'comfort in no',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_29_16_24_23 comfort in no.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'piazzöngut (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_01_29_19_00_40piazzöngut (cover).mp3',
		'year' : 2018,
		'cover' : true
	},
	{
		'name' : 'a9th fleiri hugmyndir',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_08_19_48_51a9th fleiri hugmyndir.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'a9th solo hugmyndir ish',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_08_19_57_30a9th solo hugmyndir ish.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'ddúr hugmond',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_08_20_45_42ddúr hugmond.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'very very chick',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_08_23_02_22 very very chick.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'fefefe',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_02_10_22_52_26fefefe.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'kölski kemur klakkur',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_03_17_18_38_03 kölski kemur klakkur.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'frog intro',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_04_01_21_01_12frog intro.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'nothing is original only feeling',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_04_12_12_30_46 nothing is original only feeling.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'world war II',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_04_18_11_34_40 world war II.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'eine kleine beethoven',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_05_12_24_36eine kleine beethoven.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'basshoven',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_05_21_57_57basshoven.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'during hours',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_10_16_52_49 during hours.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'popplag í g moll',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_10_17_17_14popplag í g moll.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'Beethoven var bara maður eins og við',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_11_09_01_17 Beethoven var bara maður eins og við.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'bambam',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_11_09_35_40bambam.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'hakuna matata',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_15_13_01_12hakuna matata.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'gler lol',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_16_21_54_28gler lol.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'þreyttur í vinstri',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_23_19_49_38 þreyttur í vinstri.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'Bach hægri handar æfing a moll',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_05_24_16_23_09 Bach hægri handar æfing a moll.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'dududu',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_07_31_04_02_34dududu.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'wherewasi',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_10_28_01_20_11wherewasi.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'jesus was a carpenter',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_10_29_13_23_08jesus was a carpenter.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'tirilipu',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_11_21_02_40_45tirilipu.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'eitthvað d drungalegt repeat og cheerios endir',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_12_11_00_25_06 eitthvað d drungalegt repeat og cheerios endir.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'klukkur syngja',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2018_12_12_17_46_13klukkur syngja.mp3',
		'year' : 2018,
		'cover' : false
	},
	{
		'name' : 'brunomars',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_07_16_52_21brunomars.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'into the fucking trees;',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_13_19_15_02 into the fucking trees;.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'hills shitty demo',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_15_09_49_34hills shitty demo.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'meira shitty hills',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_16_15_01_44meira shitty hills.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'where was I ba og bass',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_19_00_40_25 where was I ba og bass.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'lullandi froskur',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_24_12_50_40lullandi froskur.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'shaitty undertale',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_27_16_22_56shaitty undertale.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'minna shitty undertale',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_27_16_25_02 minna shitty undertale.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'birdo',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_30_14_35_18birdo.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'trial over',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_30_14_46_09trial over.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'head up against keyboard',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_30_15_06_02 head up against keyboard.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'inb4 great sea',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_01_31_14_03_32inb4 great sea.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'the navy blue',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_02_21_26_36 the navy blue.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'lengra jafnvel',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_04_15_02_48 lengra jafnvel.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'þetta er nú reyndar næstum bókstaflega gler eða hvað',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_04_15_44_08 þetta er nú reyndar næstum bókstaflega gler eða hvað.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'big snory man',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_04_16_08_28 big snory man.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'karfa í holu',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_08_12_16_15karfa í holu.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'bang shot me down',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_10_13_42_11bang shot me down.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'what was I outro',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_15_12_23_34 what was I outro.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'ég fór beint heim til þín',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_19_13_52_13 ég fór beint heim til þín.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'mozart',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_24_20_14_04mozart.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'korpúlfsstaðir',
		'url' : 'Lelegar_upptokur/Nexus5X/26.mars.2019/2019_02_25_22_37_00korpúlfsstaðir.mp3',
		'year' : 2019,
		'cover' : false
	},
	{
		'name' : 'damdamdamdamdamdamdam',
		'url' : 'Lelegar_upptokur/Nexus5X/26.okt.2017/damdamdamdamdamdamdam.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'the Apple store',
		'url' : 'Lelegar_upptokur/Nexus5X/26.okt.2017/the Apple store.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'bitchdonteven',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/bitchdonteven.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'china',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/china.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'fruit_beforeparty',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/fruit_beforeparty.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'fruit_firstarp',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/fruit_firstarp.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'fruit_millisöngs',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/fruit_millisöngs.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'nilstjell',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/nilstjell.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'var betra þegar ég var ekki að taka upp',
		'url' : 'Lelegar_upptokur/Nexus5X/5.feb.2017/var betra þegar ég var ekki að taka upp.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'songharr',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_10_19_16_12songharr.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'etheralatmó',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_14_etheralatmó.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'aaaaa',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_17_22_48_37aaaaa.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'vá',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_17_22_51_58 vá.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'aa2',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_18_19_14_00aa2.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'ukulelebounce',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_22_11_49_04ukulelebounce.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'dl6',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_23_14_19_01 dl6.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'dl6interstellar',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_23_dl6interstellar.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'drasl',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_04_26_23_52_42 drasl.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'Bach !!',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_16_22_27_55 Bach !!.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'uuuu',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_25_21_13_34uuuu.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'ja ja',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_25_21_37_09 ja ja.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'kt',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_30_22_30_56kt.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'wowfeelings',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/2017_05_30_22_47_10wowfeelings.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'ohmygod',
		'url' : 'Lelegar_upptokur/Nexus5X/5.jún.2017/ohmygod.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'kv (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_02_16_00_46_09 kv (cover).mp3',
		'year' : 2017,
		'cover' : true
	},
	{
		'name' : 'kuldinn (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_02_16_00_kuldinn (cover).mp3',
		'year' : 2017,
		'cover' : true
	},
	{
		'name' : 'minorminor',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_02_18_minorminor.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'birta',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_04_01_birta.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'isjalfummerimprov (cover)',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/2017_04_04_22_46_46isjalfummerimprov (cover).mp3',
		'year' : 2017,
		'cover' : true
	},
	{
		'name' : 'rythmatik',
		'url' : 'Lelegar_upptokur/Nexus5X/9.apr.2017/rythmatik.mp3',
		'year' : 2017,
		'cover' : false
	},
	{
		'name' : 'americanPsycho',
		'url' : 'Lelegar_upptokur/simi2014/americanPsycho.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'tangoey_piano',
		'url' : 'Lelegar_upptokur/simi2014/tangoey_piano.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Voice 006',
		'url' : 'Lelegar_upptokur/simi2014/Voice 006.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Voice 007',
		'url' : 'Lelegar_upptokur/simi2014/Voice 007.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'weird_organ_bass',
		'url' : 'Lelegar_upptokur/simi2014/weird_organ_bass.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'Voice 035',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2015/Voice 035.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 038',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2015/Voice 038.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 041',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2015/Voice 041.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'Voice 042',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2015/Voice 042.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'nordD4',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/nordD4.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Voice 044 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 044 (cover).mp3',
		'year' : 2016,
		'cover' : true
	},
	{
		'name' : 'Voice 045',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 045.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Voice 046 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 046 (cover).mp3',
		'year' : 2016,
		'cover' : true
	},
	{
		'name' : 'Voice 047',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 047.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Voice 051',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 051.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Voice 052 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 052 (cover).mp3',
		'year' : 2016,
		'cover' : true
	},
	{
		'name' : 'Voice 053 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 053 (cover).mp3',
		'year' : 2016,
		'cover' : true
	},
	{
		'name' : 'Voice 054',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 054.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Voice 056 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 056 (cover).mp3',
		'year' : 2016,
		'cover' : true
	},
	{
		'name' : 'Voice 057',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 057.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'Voice 058 (cover)',
		'url' : 'Lelegar_upptokur/simi24-apr-2016/2016/Voice 058 (cover).mp3',
		'year' : 2016,
		'cover' : true
	},
	{
		'name' : 'Alvarlegur Templari',
		'url' : 'Tonlist_haha/2013/Alvarlegur Templari.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'Cayce',
		'url' : 'Tonlist_haha/2013/Cayce.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'cayceV3',
		'url' : 'Tonlist_haha/2013/cayceV3.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'demo af synth shitti',
		'url' : 'Tonlist_haha/2013/demo af synth shitti.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'Drungalegt_',
		'url' : 'Tonlist_haha/2013/Drungalegt_.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'FunkyMattarugl',
		'url' : 'Tonlist_haha/2013/FunkyMattarugl.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'G-MOLL LAGIÐ píanó',
		'url' : 'Tonlist_haha/2013/G-MOLL LAGIÐ píanó.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'Hamingja',
		'url' : 'Tonlist_haha/2013/Hamingja.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'Hljómar og Dóri',
		'url' : 'Tonlist_haha/2013/Hljómar og Dóri.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'Hættu þessu rugli og horfðu upp í stjörnubjartan himininn',
		'url' : 'Tonlist_haha/2013/Hættu þessu rugli og horfðu upp í stjörnubjartan himininn.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'intro_flowers',
		'url' : 'Tonlist_haha/2013/intro_flowers.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'KORG51DELAY',
		'url' : 'Tonlist_haha/2013/KORG51DELAY.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'KORG56DELAY(no relation)',
		'url' : 'Tonlist_haha/2013/KORG56DELAY(no relation).mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'Live_sma_pitch_orgel',
		'url' : 'Tonlist_haha/2013/Live_sma_pitch_orgel.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'Osom_Techno_Lag',
		'url' : 'Tonlist_haha/2013/Osom_Techno_Lag.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'pitch_orgel',
		'url' : 'Tonlist_haha/2013/pitch_orgel.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'Páskaegg nr.3',
		'url' : 'Tonlist_haha/2013/Páskaegg nr.3.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'rosalegtrugl',
		'url' : 'Tonlist_haha/2013/rosalegtrugl.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'samraedur_V1',
		'url' : 'Tonlist_haha/2013/samraedur_V1.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'SimpleBell',
		'url' : 'Tonlist_haha/2013/SimpleBell.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'sofa',
		'url' : 'Tonlist_haha/2013/sofa.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'To_Affinity_And_Beyond',
		'url' : 'Tonlist_haha/2013/To_Affinity_And_Beyond.mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'Í Höll Fjallkonungsins (samt ekki)',
		'url' : 'Tonlist_haha/2013/Í Höll Fjallkonungsins (samt ekki).mp3',
		'year' : 2013,
		'cover' : false
	},
	{
		'name' : 'lagid_hans_afa_2 (cover)',
		'url' : 'Tonlist_haha/2013/piano/lagid_hans_afa_2 (cover).mp3',
		'year' : 2013,
		'cover' : true
	},
	{
		'name' : 'poem_mic_3 (cover)',
		'url' : 'Tonlist_haha/2013/piano/poem_mic_3 (cover).mp3',
		'year' : 2013,
		'cover' : true
	},
	{
		'name' : 'bachPreludeNo1Justin',
		'url' : 'Tonlist_haha/2014/bachPreludeNo1Justin.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'TheLordIsMyShepherd',
		'url' : 'Tonlist_haha/2014/TheLordIsMyShepherd.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'To Affinity And Beyond-10',
		'url' : 'Tonlist_haha/2014/to_affinity_v2/To Affinity And Beyond-10.mp3',
		'year' : 2014,
		'cover' : false
	},
	{
		'name' : 'America_m&a (cover)',
		'url' : 'Tonlist_haha/2015/America_m&a (cover).mp3',
		'year' : 2015,
		'cover' : true
	},
	{
		'name' : 'damndimdam',
		'url' : 'Tonlist_haha/2015/damndimdam.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'drasl',
		'url' : 'Tonlist_haha/2015/ac/drasl.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'ninth2',
		'url' : 'Tonlist_haha/2015/hex/ninth2.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'singing_entire_thing',
		'url' : 'Tonlist_haha/2015/hex/singing_entire_thing.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'doors',
		'url' : 'Tonlist_haha/2015/kristjan/doors.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'pompei',
		'url' : 'Tonlist_haha/2015/kristjan/pompei.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'vidya',
		'url' : 'Tonlist_haha/2015/kristjan/vidya.mp3',
		'year' : 2015,
		'cover' : false
	},
	{
		'name' : 'monkey_shines_spooked',
		'url' : 'Tonlist_haha/2016/monkey_shines/monkey_shines_spooked.mp3',
		'year' : 2016,
		'cover' : false
	},
	{
		'name' : 'kt-demo',
		'url' : 'Tonlist_haha/2018/kt/kt-demo.mp3',
		'year' : 2018,
		'cover' : false
	}
];

global.set('audio-data', audio_data);

}());