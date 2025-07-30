---
title: "taipowergrid"
tags:
  - fetus
---
```perl
#!/usr/bin/perl
# Copyright       : http://www.fsf.org/copyleft/gpl.html
# Author          : Dan Jacobson -- http://jidanni.org/geo/taipower/
# Created On      : Thu Mar 16 17:37:29 2006
# Last Modified On: Sat Mar  7 01:50:23 2020
# Update Count    : 488

=encoding utf8

=head1 DESCRIPTION

轉換台灣電力公司設備座標 < = > 公尺座標。
Taipowergrid converts Taiwan Power Company coordinates to and from X
and Y meters coordinates.

=head1 USAGE
$ taipowergrid
輸入 with standard input of
   #A comment
   329999 2449999
   W9999 HE9999
   354999 2663999 119
輸出 gives output:
   ##A comment
   #1 329999 2449999
   W9999 HE9999
   #2 W9999 HE9999
   329999 2449999
   #3 354999 2663999 119
   X9999 HE9999
加註 119 為澎湖，無則台、金、馬。
The 119 specifies the Penghu meridian,
else Taiwan, Jinmen, or Mazu is assumed.
W9999HE9999 無空格輸入亦可。 No-space input also OK.
=cut

use strict;
use warnings FATAL       => 'all';
use constant II          => "輸入錯誤 invalid input";
use constant D_EW        => 80000;                        #Dimension east-west
use constant D_NS        => 50000;                        #Dimension north-south
use constant TAIWAN_LEFT => 90000;
use constant TAIWAN_TOP  => 2800000;
use constant PENGHU_LEFT => 275000;
use constant PENGHU_BOTTOM => 2564000;
use constant JINMEN_LEFT   => 10000;                      #552700;
use constant JINMEN_BOTTOM => 2675800;
use constant MAZU_LEFT     => 10000;                      #790400
use constant MAZU_BOTTOM   => 2894000;
my %baselines = (
    S => [ MAZU_LEFT,   MAZU_BOTTOM ],
    Y => [ PENGHU_LEFT, PENGHU_BOTTOM ],
    X => [ PENGHU_LEFT, PENGHU_BOTTOM + D_NS ],
    Z => [ JINMEN_LEFT, JINMEN_BOTTOM ]
);
use constant TAIWAN_MAP => '
_ABC
_DEF
_GH_
JKL_
MNO_
PQR_
_TU_
_VW';
my $taiwan_bottom = ( undef, TAIWAN_TOP + D_NS );

for ( split /\n/, TAIWAN_MAP ) {
    my $left_edge = 10000;
    $taiwan_bottom -= D_NS;
    for ( split // ) {
        $left_edge += D_EW;
        $baselines{$_} = [ $left_edge, $taiwan_bottom ] if /[[:upper:]]/;
    }
}

my $conversion;
while (<>) {
    if (/^(#|$)/) { print "#$_"; next }    #comments
    print "#", ++$conversion, " ", $_;
    chomp;
    if   (/^\d/) { print join( " ", xy_to_electric($_) ), "\n" }
    else         { print join( " ", electric_to_xy($_) ), "\n" }
}

sub electric_to_xy {
    die II
      unless my ( $area_letter, @electric ) =
      /^([A-HJ-Z])(\d\d)(\d\d)\s*([A-H])([A-E])(\d)(\d)(?:(\d)(\d))?$/;
    $electric[0] = 50 + ( $electric[0] + 50 ) % 100 if $area_letter eq 'Z';
    my @xy = electric80000x50000_to_xy(@electric);
    $xy[$_] += $baselines{$area_letter}[$_] for 0 .. 1;
    push @xy, 119 if $area_letter =~ /[XY]/;
    return @xy;
}

sub electric80000x50000_to_xy {
    my @xy = ( 800 * shift, 500 * shift );
    $_ += ( ord(shift) - ord 'A' ) * 100 for @xy;
    $_ += 10 * shift for @xy;
    $_ += shift // 0 for @xy;
    return @xy;
}

sub xy_to_electric {
    die II unless my @xy = /^(\d+)\s+(\d+)(\s+\d+)?$/;
    my $area_letter = area_letter_of(@xy);
    $xy[$_] -= $baselines{$area_letter}[$_] for 0 .. 1;
    $xy[0] %= D_EW if $area_letter eq 'Z';
    return $area_letter . xy_to_electric80000x50000(@xy);
}

sub area_letter_of {
    if ( defined $_[2] ) {
        die
"澎湖加註 119. 其餘自動偵測。 Append 119 for Penghu, other areas automatically detected"
          unless $_[2] == 119;
        die II if $_[0] < PENGHU_LEFT;
        die II if $_[0] >= PENGHU_LEFT + D_EW;
        die II if $_[1] < PENGHU_BOTTOM;
        my $i;
        for ( 'Y', 'X' ) {
            return $_ if $_[1] < PENGHU_BOTTOM + D_NS * ++$i;
        }
        die II;
    }
    if ( $_[1] >= MAZU_BOTTOM ) {
        die II unless $_[1] < MAZU_BOTTOM + D_NS;
        die II unless $_[0] >= MAZU_LEFT;
        die II unless $_[0] < MAZU_LEFT + D_EW;
        return 'S';
    }
    if ( $_[0] < JINMEN_LEFT + D_EW * 3 / 2 ) {
        die II unless $_[0] >= JINMEN_LEFT;
        die II unless $_[1] >= JINMEN_BOTTOM;
        die II unless $_[1] < JINMEN_BOTTOM + D_NS;
        return 'Z';
    }
    die II if $_[1] >= TAIWAN_TOP;
    die II if $_[1] < $taiwan_bottom;
    my $char_position =
      int( ( TAIWAN_TOP - $_[1] - 1 ) / D_NS ) * 5 +
      int( ( $_[0] - TAIWAN_LEFT ) / D_EW ) + 1;
    die II if $char_position > length TAIWAN_MAP;
    die II if ( my $char = substr TAIWAN_MAP, $char_position, 1 ) !~ /[A-W]/;
    return $char;
}

sub xy_to_electric80000x50000 {
    return sprintf "%02d%02d %s%s%d%d%d%d",
      map( int, $_[0] / 800, $_[1] / 500 ),
      chr( ord('A') + int( $_[0] % 800 / 100 ) ),
      chr( ord('A') + int( $_[1] % 500 / 100 ) ),
      map( int, $_[0] % 100 / 10, $_[1] % 100 / 10 ), $_[0] % 10, $_[1] % 10;
}
```
