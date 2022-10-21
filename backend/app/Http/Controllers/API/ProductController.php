<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Wish;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\URL;

//    Top of the controller call/ use  all models and 

class ProductController extends Controller
{

    // Get Products function used for get all products for select to wishlish
    // Map the product to replace product image usl
    // response a json products list if not exists product return [] 

    public function getProducts()
    {
        $url = URL::to('/');
        $products = Product::get()
        ->map(function ($product) use ($url) {
            $product->image = $url . '/' . $product->image;
            return $product;
        });

        if ($products) {
            return response([
                'success' => true,
                'data' => $products,
            ], 200);
        } else {
            return response([
                'success' => false,
                'data' => [],
            ], 400);
        }

    }

    // GetwishList functions used for get all wishlist product to user instant
    // Here join with product table to get product informtion
    // Return wishlist or [] array
    public function getWishList(){
        
        $url = URL::to('/');
        $products = Wish::
        join('products','products.id','=','wish_list.product_id')
        ->get()
        ->map(function ($product) use ($url) {
            $product->image = $url . '/' . $product->image;
            return $product;
        });

        if ($products) {
            return response([
                'success' => true,
                'data' => $products,
            ], 200);
        } else {
            return response([
                'success' => false,
                'data' => [],
            ], 400);
        }
    }


    //Store wish list used for add product to wish list instant
    // when user click on add button then this function call
    // Its return a success of fail message 

    public function storeWish(Request $request){
        try{

            $product_id = $request->product_id;
            $qty = Wish::where('product_id', $product_id)->value('qty') ?? 0;
             if($product_id){
                Wish::updateOrCreate(
                    ['product_id' => $product_id],
                    [
                        'qty' => $qty + $request->qty,
                    ]);
             }
   
           return response()->json([
                   'success' => true,
                   'message' => 'Wish added successfully!',
               ]);
         }catch(Exception $exception){
              return response()->json([
                   'success' => false,
                   'message' => 'Something went wrong!'
               ]);
         }
    }
   
    // This funcation remove product form wishlist
    // User click on remove button to refresh the wish list to test again 
    // return a successful message or warning

    public function removeItem(){
       $isDelete = Wish::delete();
        if($isDelete){
            return response()->json([
                    'success' => true,
                    'message' => 'Refresh successfully!',
                ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong!'
            ]);
        }
  
    }

}
