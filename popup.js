// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Search the bookmarks when entering the search keyword.
$(function () {
    //$('#search').change(function () {
    //
    //});

    $('#click').click(function () {// 出对话框了
        var timestamp = $('#timestamp').val();
        $('#result').text(getLocalTime(timestamp));//;

    });
});

function getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}