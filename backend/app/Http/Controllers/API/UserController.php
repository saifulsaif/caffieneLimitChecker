<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\URL;

class UserController extends Controller
{

    public function user()
    {
        $user = User::first();
        $user->profile = URL::to('/' . $user->profile);

        if ($user) {
            return response([
                'success' => true,
                'data' => $user,
            ], 200);
        } else {
            return response([
                'success' => false,
                'data' => [],
            ], 400);
        }

    }

}
