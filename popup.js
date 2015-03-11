// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Search the bookmarks when entering the search keyword.
$(function () {
    $('#timestamp').bind('input propertychange', function () {
        setTime();
    });
    setTime();
});

function setTime() {
    var timestamp = new Date(parseInt($('#timestamp').val()) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    $('#result').text(timestamp);
}